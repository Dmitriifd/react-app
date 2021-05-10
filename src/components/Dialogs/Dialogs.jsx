import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";




const Dialogs = (props) => {

    
    
  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
  let messagesElements = props.state.messages.map(el => <Message message={el.message} />);


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        {/* <Message message={messagesData[0].message}/>*/}
      </div>
    </div>
  );
};

export default Dialogs;
