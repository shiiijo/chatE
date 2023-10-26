import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import ChatScreen from "./components/ChatScreen";
import { Provider } from "react-redux";
import store from "./utils/redux/store";

const App = () => {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <ChatScreen />,
    },
    // {
    //   path: "/chat",
    //   element: <ChatScreen />,
    // },
  ]);

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
