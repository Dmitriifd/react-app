import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";



const Dialogs = (props) => {

  let state = props.dialogsPage;
    
  let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
  let messagesElements = state.messages.map(el => <Message message={el.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div><textarea onChange={onNewMessageChange} placeholder='Message' value={newMessageBody}></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
        {/* <Message message={messagesData[0].message}/>*/}
        
      </div>
    </div>
    
  );
};

export default Dialogs;
