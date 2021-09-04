import React,{useState,useEffect} from 'react'
import './Feed.css'
import Post from './Post.js'
import TweetBox from './TweetBox';
// import Saran from './Saran.jpg';
import db from './firebase';
import FlipMove from 'react-flip-move';


function Feed() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);
    

   
    return (
        <div className="feed">
            <div classname="feed__header">
                <h2>Home</h2>
            {/* Tweet box */}
            <TweetBox/>
            <FlipMove>
            {posts.map(post=>(
                   <Post 
                   key={post.text}
                   displayName={post.displayName}
                   username={post.username}
                   verified ={post.verfied}
                   text={post.text}
                   avatar = {post.avatar}
                   image={post.image} />
            ))}
            </FlipMove>

         
            
           
            </div>




            </div>
    )
}

export default Feed
