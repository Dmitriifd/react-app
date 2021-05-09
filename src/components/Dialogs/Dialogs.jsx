import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Alena'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'Ola'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
    ];

    let messagesElements = messages.map(el => <Message message={el.message} />);

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );


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
