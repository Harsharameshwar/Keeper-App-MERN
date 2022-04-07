import React from "react";
import EditNote from "../components/EditNote";


function Note(props) {

  function handleClick() {
    props.onDelete(props.title);
    // Window.location.reload();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <EditNote id={props.id} title={props.title}
        content={props.content}
      />
      <button onClick={handleClick}>DEL</button>
    </div>
  );
}

export default Note;
