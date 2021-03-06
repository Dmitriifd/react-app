const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
  }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export default dialogsReducer;