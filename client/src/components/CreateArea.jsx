import React, { useState } from "react";



import axios from "axios";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;
  

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


async function postname(e){
try {
      if(note.title==="" && note.content===""){
        alert("Empty!!")
        return;
      }
			await axios.post("http://localhost:3000/", {
      note
			})

		} catch (error) {
			console.log(error)
		}
}


  return (
    <div>
      <form onSubmit={postname}>
      <input
          name="title"
          onChange= {handleChange}
          value={note.title}
          placeholder="Title"
        />
      <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default CreateArea;
