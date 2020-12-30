import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider.js";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  //state in react is how we write a react variables
  const [input, setInput] = useState("");
  //the actual variable's name is called input and we have a modifier called setInput, setter function called setInput
  //then use the use state hook because this is a functional component (keep track of the input)
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //some clever db stuff !!!!!!!

    //when we hit the enter key, we are going to go to the collection posts

    let currentTime = getDateTime();

    // //  getDateTime function. This function returns the current timestamp.
    function getDateTime() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      if (month.toString().length === 1) {
        month = "0" + month;
      }
      if (day.toString().length === 1) {
        day = "0" + day;
      }
      if (hour.toString().length === 1) {
        hour = "0" + hour;
      }
      if (minute.toString().length === 1) {
        minute = "0" + minute;
      }
      if (second.toString().length === 1) {
        second = "0" + second;
      }

      var dateTime =
        year +
        "/" +
        month +
        "/" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;

      return dateTime;
    }

    db.collection("posts").add({
      message: input,
      // timestamp: currentTime,
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            {/* everytime you have something onclick, they give you something called an event */}
            {/* here, the default event is refreshing which we do not want here so we use e.preventDefault() to prevent it */}
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
