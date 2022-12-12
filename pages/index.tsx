import React from "react";
import Chatbox from "../components/Chatbox";
import MessageList from "../components/MessageList";
import Nav from "../components/Nav";
import useMessages from "../hooks/useMessages";

const HomePage = () => {
  const { messages, sendMessage } = useMessages();

  return (
    <main className="flex-1 justify-between flex flex-col h-screen">
      <Nav />
      <MessageList messages={messages} sendMessage={sendMessage} />
      <Chatbox sendMessage={sendMessage} />
    </main>
  );
};

export default HomePage;
