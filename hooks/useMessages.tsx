import { useState } from "react";
import { getStations, getTrainTimes } from "../lib/api";
import { Message } from "../lib/interfaces";

const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      user: false,
      content: [
        {
          text: "Welcome to RailBot!",
        },
        {
          text: 'Try "Show stations" or "Show timing for Malahide"',
        },
      ],
    },
  ]);

  const sendMessage = async (text: string) => {
    setMessages((prev) => [...prev, {
      user: true,
      content: [{
        text
      }]
    }])
    if (text.toLowerCase() === "show stations") {
      const data = await getStations();
      setMessages((prev) => [...prev, {
        user: false,
        content: [
          {
            text: "We found the following stations based on your search:",
          },
          ...data.map((i) => ({
            text: `${i.code} - ${i.description}`,
            button: i.description,
          })),
        ],
      }])
    } else if (text.toLowerCase().includes("show timing for ")) {
      const station = text
        .toLowerCase()
        .replace("show timing for ", "")
        .replaceAll(".", "");
      if (station) {
        const data = await getTrainTimes(station);
        setMessages((prev) => [...prev, {
          user: false,
          content: [
            {
              text: `We found the following trains for ${data[0].stationFullName}`,
            },
            ...data.map((i) => ({
              text: `Destination: ${i.destination}\nDestination time: ${
                i.destinationTime
              }\nDirection: ${i.direction}\nDue in: ${
                i.dueIn
              }\nExpected Arrival: ${i.expArrival}\nExpected Departure: ${
                i.expDepart
              }\nLate: ${i.late === "0" ? "No" : "Yes"}\nLocation type: ${
                i.locationType
              }\nOrigin: ${i.origin}\nOrigin Time: ${
                i.originTime
              }\nScheduled Arrival: ${i.schArrival}\nScheduled Departure: ${
                i.schDepart
              }\n`,
            })),
          ],
        },])
      }
    } else {
      setMessages((prev) => [...prev, {
        user: false,
        content: [
          {
            text: "Sorry, I don't know how to answer that",
          },
        ],
      },])
    }
  };

  return {
    sendMessage,
    messages,
  };
};

export default useMessages;
