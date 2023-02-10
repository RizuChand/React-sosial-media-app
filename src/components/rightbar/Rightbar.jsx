import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  return <div className="rightbar">
    <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img className="birthdayImg" src="/assets/gift.png" alt="" />
        <span className="birthdayText"> <b>Manghuang</b> and <b>3 other friends</b> have birthday today </span>
      </div>
      <img className="rightbarAd" src="/assets/ad.png" alt="" />
      <h4 className="rightbarTittle">Friends Online</h4>
      <ul className="righbarFriendList">
        <li className="rightbarFriend">
          <div className="profileContainer">
            <img className="imgContainer" src="/assets/person/4.jpeg" alt="" />
            <span className="online"></span>
          </div>
          <span className="username">Joko wiranto</span>
          
        </li>
        <li className="rightbarFriend">
          <div className="profileContainer">
            <img className="imgContainer" src="/assets/person/4.jpeg" alt="" />
            <span className="online"></span>
          </div>
          <span className="username">Joko wiranto</span>
          
        </li>
        <li className="rightbarFriend">
          <div className="profileContainer">
            <img className="imgContainer" src="/assets/person/4.jpeg" alt="" />
            <span className="online"></span>
          </div>
          <span className="username">Joko wiranto</span>
          
        </li>
        <li className="rightbarFriend">
          <div className="profileContainer">
            <img className="imgContainer" src="/assets/person/4.jpeg" alt="" />
            <span className="online"></span>
          </div>
          <span className="username">Joko wiranto</span>
          
        </li>
        <li className="rightbarFriend">
          <div className="profileContainer">
            <img className="imgContainer" src="/assets/person/4.jpeg" alt="" />
            <span className="online"></span>
          </div>
          <span className="username">Joko wiranto</span>
          
        </li>
      </ul>
    </div>
    </div>;
}
