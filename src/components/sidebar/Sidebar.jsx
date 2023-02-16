import React from "react";
import "./sidebar.css";
import {RssFeed,Chat,PlayCircle,Group,Bookmark,Help,Work,Event,School} from '@mui/icons-material'
import { users } from "../../dummyData";
import Friends from "../friends/Friends";

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
        {users.map(e=>(
          <Friends key={e.id} user={e}/>
          ))}
        
        
      </ul>

    </div>
  </div>;
}
