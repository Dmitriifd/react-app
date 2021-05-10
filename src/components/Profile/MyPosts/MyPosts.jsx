import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements = props.posts.map((el) => <Post id={el.id} message={el.message} likesCount={el.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
        	<textarea ref={newPostElement}></textarea>
        </div>
        <div>
			<button onClick={ addPost }>Add post</button>
		</div>
      </div>
      <div className={s.posts}>
	  	{ postsElements }
        {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} /> */}
      </div>
    </div>
  );
};

export default MyPosts;

