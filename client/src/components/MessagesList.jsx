import { useEffect, useState } from "react";

function MessagesList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error al cargar mensajes:", err));
  }, []);

  return (
    <div className="divide-y">
      {messages.length === 0 ? (
        <p className="text-gray-500">No hay mensajes todavía.</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="py-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">{msg.name}</h3>
              <span className="text-sm text-gray-400">
                {new Date(msg.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-blue-700">{msg.email}</p>
            <p className="text-gray-700 mt-1">{msg.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MessagesList;
