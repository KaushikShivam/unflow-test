import React from "react";
import { Message } from "../lib/interfaces";

interface MessageItemProps {
  message: Message;
  sendMessage: (text: string) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, sendMessage }) => {
  return (
    <div className="flex flex-col">
      {message.content.map((content, index) => (
        <div
          key={index}
          className={`flex flex-col mb-2 ${
            message.user ? "ml-auto" : "mr-auto"
          }`}
        >
          <div className="flex flex-col space-y-2 text-xs max-w-xs">
            <div>
              <span
                className={`whitespace-pre-wrap px-4 py-2 rounded-lg inline-block text-gray-600 ${
                  message.user ? "bg-blue-300" : "bg-gray-300"
                }`}
              >
                {content.text}
              </span>
              {content.button ? (
                <button
                  onClick={() =>
                    sendMessage(`Show timing for ${content.button}`)
                  }
                  className="ml-2 w-6 h-6 rounded-full border border-blue-500 text-blue-500 font-bold"
                >
                  i
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageItem;
