import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer.js";


const MyPosts = (props) => {

	let postsElements = props.posts.map((el) => <Post id={el.id} message={el.message} likesCount={el.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
        	<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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

