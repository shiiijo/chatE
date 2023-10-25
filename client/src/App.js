import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import Register from "./components/Register";
import ChatScreen from "./components/ChatScreen";

const App = () => {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/chat",
      element: <ChatScreen />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
