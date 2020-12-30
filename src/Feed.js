import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  //let's create a variable to keep track of the post, set the empty array as its default value

  //this is the real time connection in three lines of code
  //we want to orderby descending so the most recent one comes to the top
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  //the last [] is where we put dependancys by set it empty, it only run once when the feed component loads
  //it is a realtime snapshot means when anything is updated, added inside of this collection, it will give us the realtime snapshot and pour it into your code
  //here you will get an array, then map through every single one, for each one we want to return a custom object with an id , doc.data is essentially all doc.data
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          //key is import for efficient react rendering, to learn more read keys on react performance rendering
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
