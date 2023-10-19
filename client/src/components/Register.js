import React, { useRef } from "react";

const Register = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = () => {
    console.log(name.current.value);
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
