import axios from "axios";
import React, { useRef } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider, auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "..//utils/redux/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = async () => {
    // var Fname = name.current.value;
    // var Femail = email.current.value;
    // var Fpassword = password.current.value;
    // const res = await axios.post("/user/register", {
    //   Fname,
    //   Femail,
    //   Fpassword,
    // });
    // console.log(res);

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

  return (
    <div className="m-8">
      <button
        onClick={() => {
          handleFormSubmit();
        }}
        className="block p-1 border  bg-blue-400 text-white rounded-md relative mr-0"
      >
        Chat now
      </button>
    </div>
  );
};

export default Register;
