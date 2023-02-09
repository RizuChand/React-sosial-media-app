import React from "react";
import './post.css'
import {MoreVert} from '@mui/icons-material'

export default function Post () {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfile" src="/assets/person/1.jpeg" alt="" />
                        <span className="postUsername">reinzu board</span>
                        <span className="postDate">30 minute ago</span>   
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Heya I love you so much</span>
                    <img className="postImg" src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="resIcon" src="/assets/like.png" alt="" />
                        <img className="resIcon" src="/assets/heart.png" alt="" />
                        <span className="postResCounter">400 people like this post</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postTextComment">12 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}