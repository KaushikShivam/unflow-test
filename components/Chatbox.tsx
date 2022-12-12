import React, { useState } from "react";

interface ChatboxProps {
  sendMessage: (text: string) => void;
}

const Chatbox: React.FC<ChatboxProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSearch = () => {
    if (!message) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="px-4 py-3 mb-2 sm:mb-0">
      <div className="flex w-100">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Write your message!"
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md p-3"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          type="button"
          className="ml-3 rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
