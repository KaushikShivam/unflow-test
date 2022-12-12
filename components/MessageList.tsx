import React, { useEffect, useRef } from "react";
import { Message } from "../lib/interfaces";
import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: Message[];
  sendMessage: (text: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, sendMessage }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <div className="h-full flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} sendMessage={sendMessage} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
