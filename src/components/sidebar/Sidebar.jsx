import React from "react";
import "./sidebar.css";
import {RssFeed,Chat,PlayCircle,Group,Bookmark,Help,Work,Event,School} from '@mui/icons-material'

export default function Sidebar() {
  return <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
         <li className="sidebarListItem">
            <RssFeed className="sidebarItem"/>
            <span className="sidebarListText">Feed</span>
         </li>
         <li className="sidebarListItem">
            <Chat className="sidebarItem"/>
            <span className="sidebarListText">Chat</span>
         </li>
         <li className="sidebarListItem">
            <PlayCircle className="sidebarItem"/>
            <span className="sidebarListText">Videos</span>
         </li>
         <li className="sidebarListItem">
            <Group className="sidebarItem"/>
            <span className="sidebarListText">Groups</span>
         </li>
         <li className="sidebarListItem">
            <Bookmark className="sidebarItem"/>
            <span className="sidebarListText">Bookmark</span>
         </li>
         <li className="sidebarListItem">
            <Help className="sidebarItem"/>
            <span className="sidebarListText">Question</span>
         </li>
         <li className="sidebarListItem">
            <Work className="sidebarItem"/>
            <span className="sidebarListText">Job</span>
         </li>
         <li className="sidebarListItem">
            <Event className="sidebarItem"/>
            <span className="sidebarListText">Event</span>
         </li>
         <li className="sidebarListItem">
            <School className="sidebarItem"/>
            <span className="sidebarListText">Course</span>
         </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
          <span className="sidebarFriendName">ula ule</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/3.jpeg" alt="" />
          <span className="sidebarFriendName">uwa uwe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt="" />
          <span className="sidebarFriendName">uya ute</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/5.jpeg" alt="" />
          <span className="sidebarFriendName">Brainzu</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
          <span className="sidebarFriendName">Sakisaki</span>
        </li>
      </ul>

    </div>
  </div>;
}
