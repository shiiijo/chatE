import axios from "axios";
import React, { useRef } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider, auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(result);
        dispatch(
          addUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignOut = async () => {
    dispatch(removeUser());
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="m-8 flex">
      <button
        onClick={() => {
          handleSignIn();
        }}
        className="block p-1 border  bg-blue-400 text-white rounded-md relative mr-0"
      >
        Chat now
      </button>
      <button
        onClick={() => {
          handleSignOut();
        }}
        className="block p-1 border  bg-blue-400 text-white rounded-md relative mr-0"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
