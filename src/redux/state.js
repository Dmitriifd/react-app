import {renderEntireTree} from '../render';
 
let state = {
  profilePage: {
    posts: [
        { id: 1, message: "Hi, how are you", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 },
      ],
    newPostText: 'it'
  },
  dialogsPage: {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra" },
        { id: 3, message: "Yo" },
      ],
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Masha" },
        { id: 4, name: "Alena" },
        { id: 5, name: "Nastya" },
        { id: 6, name: "Ola" },
      ],
  },
  sidebar: {}
};

export let addPost = () => {
    let newPost = {
        id:  5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;
