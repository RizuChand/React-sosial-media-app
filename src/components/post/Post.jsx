import React from "react";
import './post.css'
import {MoreVert} from '@mui/icons-material'
import { users } from "../../dummyData";

export default function Post ({post}) {
    // const [like, setLike] = useState(post.likes);
    return (
        <div className="post">
            <div className="postWrapper">
                
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfile" src={users.filter((e) => e.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">

                            {users.filter((e) => e.id === post.userId)[0].username}
                            
                            </span>
                        <span className="postDate">{post.dates}</span>   
                    </div>
                    <div className="postTopRight">

                        <MoreVert/>
                        
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="resIcon" src="/assets/like.png" alt="" />
                        <img className="resIcon" src="/assets/heart.png" alt="" />
                        <span className="postResCounter">{post.likes} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postTextComment">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}