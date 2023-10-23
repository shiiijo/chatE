import axios from "axios";
import React, { useRef } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider, auth } from "../utils/firebase";

const Register = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

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
        // This gives you a Google Access Token. You can use it to access the Google API.
        const user = result.user;
        console.log(result);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="m-8 text-center">
      <h1 className="text-2xl font-semibold">Register form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <input
          ref={name}
          type="text"
          placeholder="Enter your name"
          className="block p-1 w-full border m-2 rounded-md"
        ></input>
        <input
          ref={email}
          type="email"
          placeholder="Enter your email"
          className="block p-1 w-full border m-2 rounded-md"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Set your password"
          className="block p-1 w-full border m-2 rounded-md"
        ></input>
        <button className="block p-1 w-full border m-2 bg-blue-400 text-white rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
