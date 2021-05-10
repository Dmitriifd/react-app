import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";




const Dialogs = (props) => {

    
    
    let messagesElements = props.messages.map(el => <Message message={el.message} />);

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

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
