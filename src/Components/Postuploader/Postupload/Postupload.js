import React, { useState, useEffect } from "react";
import "./Postupload.css";
import { Avatar, LinearProgress } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, dp, timestamp } from "../../../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { Image, SmartDisplay, Article, Work } from "@mui/icons-material";
import Post from "../Posts/Post";

const Postupload = ({ user }) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [posts, setPosts] = useState([]);

  const handleclick = (event) => {
    event.preventDefault();
    console.log("submitted", input, image);
    const storageRef = ref(storage, `images/${image.name}`);
    const uplaodtask = uploadBytesResumable(storageRef, image);

    uplaodtask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uplaodtask.snapshot.ref).then(async (downloadURL) => {
          await addDoc(collection(dp, "posts"), {
            message: input,
            timestamp: timestamp,
            profilepic: user.photoURL,
            username: user.displayName,
            image: downloadURL,
          });
          setImage("");
          setInput("");
          setProgress(0);
        });
      }
    );
  };

  useEffect(() => {
    const q = query(collection(dp, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);

  console.log(posts);

  return (
    <div>
      <div className="postupload">
        <form>
          <div className="upload_input">
            <Avatar src={user.photoURL} />{" "}
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>

          <div className="uploads">
            <div className="postupload_icons">
              <div className="upload_icons">
                <input
                  type="file"
                  onChange={(event) => setImage(event.target.files[0])}
                />
                <Image style={{ color: "blue" }} />
                <p>Photo</p>
              </div>
              <div className="upload_icons">
                <SmartDisplay style={{ color: "green" }} />
                <p>Video</p>
              </div>
              <div className="upload_icons">
                <Work style={{ color: "green" }} />
                <p>job</p>
              </div>
              <div className="upload_icons">
                <Article style={{ color: "orange" }} />
                <p>Write Article</p>
              </div>
            </div>
            <button type="submit" onClick={handleclick}>
              random
            </button>
          </div>
        </form>
        {progress > 0 && (
          <LinearProgress variant="determinate" value={progress} />
        )}
      </div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilepic={post.data.profilepic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            image={post.data.image}
            username={post.data.username}
          />
        );
      })}
    </div>
  );
};

export default Postupload;
