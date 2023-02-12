import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
export default function Feed() {
  return <div className="feed">
    <div className="feedWrapper">
      <Share/>

      {Posts.map((e) => ( 
        <Post key={e.id} post={e} />
        ))}
    </div>
  </div>;
}
