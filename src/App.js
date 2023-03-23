import React, { useState } from "react";
import "./App.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import Login from "./Components/Login/Login";
import Header from "../src/Components/Header/Header";
import Left from "./Components/Sidebar/Left/Left";
import Postupload from "./Components/Postuploader/Postupload/Postupload";
import Post from "./Components/Postuploader/Posts/Post";
import Right from "./Components/Sidebar/Right/Right";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <Header user={user} />
          <div className="body">
            <Left user={user} />
            <div className="right">
              <Postupload user={user} />
              <Right />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
