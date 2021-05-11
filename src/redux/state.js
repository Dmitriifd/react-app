const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

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
            newMessageBody: ''
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        
        
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
  
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;
window.store = store; 