import React from "react";
import "./rightbar.css";
import { users } from "../../dummyData";
import Online from "../online/Online";
import Share from "../share/Share";

export default function Rightbar() {
  return (
  <div className="rightbar">
    <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img className="birthdayImg" src="/assets/gift.png" alt="" />
        <span className="birthdayText"> <b>Manghuang</b> and <b>3 other friends</b> have birthday today </span>
      </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTittle">Friends Online</h4>
        <ul className="righbarFriendList">
          {users.map(e=>(
            <Online key={e.id} user={e} />
          ))}
        </ul>

        
    </div>
  </div>)
}
