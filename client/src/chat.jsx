import axios from "axios";
import React, { useState, useEffect } from "react";

function Chat() {
  const [message, setMessage] = useState({ msg: [] });
  const [text, setText] = useState([]);

  const textHandler = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3000/users/recive`,
    })
      .then((res) => {
        console.log("GET METHOD", res.data);
        setMessage({ ...message, msg: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const axiosChat = async (e) => {
    e.preventDefault();

    await axios({
      method: "POST",
      url: "http://localhost:3000/users/chat",
      data: text,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    await axios({
      method: "GET",
      url: `http://localhost:3000/users/recive`,
    })
      .then((res) => {
        console.log("GET METHOD", res.data);
        setMessage({ ...message, msg: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="containerChat">
      <div className="containerText">
        {message.msg.map((item) => {
          if (item.text) {
            return <p className="text-chat">{item.text}</p>;
          }

          return <p className="text-chat2">{item.chat2}</p>;
        })}
      </div>
      <div className="textInput">
        <form
          className="chat-form"
          onSubmit={(e) => {
            axiosChat(e);
          }}
        >
          <input
            type="text"
            name="text"
            placeholder="type something..."
            onChange={(e) => {
              textHandler(e);
            }}
          />
          <button type="submit" className="btnChat">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
