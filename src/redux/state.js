const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('dsds');
    },

    getState() {
        return  this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if  (action.type === ADD_POST) {
            let newPost = {
                id:  5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});



export default store;
window.store = store; 