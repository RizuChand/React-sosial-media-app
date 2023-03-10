import React from "react";
import './share.css'
import {PermMedia, Label,Room,EmojiEmotions} from '@mui/icons-material'

export default function Share () {
    return(
        <div className="share">
            <div className="shareWrapper">
                 <div className="">
                    <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="Whats is your mind?" className="shareInput" />
                 </div>

                 <hr className="shareHr"/>

                 <div className="shareBawah">
                    <div className="shareOptions">
                        <div className="contoh">
                            <PermMedia htmlColor="red" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="contoh">
                            <Label htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="contoh">
                            <Room htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="contoh">
                            <EmojiEmotions htmlColor="#CCCCFF" className="shareIcon"/>
                            <span className="shareOptionText">Emotion</span>
                        </div>
                    </div>
                        <button className="buttonContoh">Share</button>
                 </div>
            </div>
        </div>
    )
}