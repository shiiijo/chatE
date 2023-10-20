import React from "react";
import Register from "./components/Register";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;
  return (
    <div>
      <Register />
    </div>
  );
};

export default App;
