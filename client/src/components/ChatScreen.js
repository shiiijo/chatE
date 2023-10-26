import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";

const ChatScreen = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  return (
    <div>
      <img
        src="https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg"
        className="w-screen -z-10 absolute m-[-28px]"
      />
      <Header />
      {!user && <div className="bg-black h-[100vh] opacity-60"></div>}
    </div>
  );
};

export default ChatScreen;
