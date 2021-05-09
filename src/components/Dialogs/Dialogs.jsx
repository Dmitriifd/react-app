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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dima" id="1"/>
        <DialogItem name="Valera" id="2"/>
        <DialogItem name="Masha" id="3"/>
        <DialogItem name="Alena" id="4"/>
        <DialogItem name="Nastya" id="5"/>
        <DialogItem name="Ola" id="6"/>
      </div>
      <div className={s.messages}>
        <Message message='Hi'/>
        <div className={s.message}>How is your it-kamasutra</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
