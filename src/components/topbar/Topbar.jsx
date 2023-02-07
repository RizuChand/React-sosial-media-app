import React from "react";
import './topbar.css'
import {Chat, Notifications, Person, Search} from '@mui/icons-material'

export default function Topbar () {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Bersosial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for interesting content from your friends" className="searchInput" />
                    
                </div>

            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarlink">Hompage</div>
                    <div className="topbarlink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />

            </div>
            
        </div>
    )
}