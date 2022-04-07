import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";




function App() {
  const [notes, setNotes] = useState([]);

 
 useEffect(()=>{
   const fetchPosts=async ()=>{
     const res=await axios.get("http://localhost:3000/posts");
     setNotes(res.data);
    //  console.log(res.data[0]._id);
    //  console.log(setNotes)
   }
   fetchPosts()
 },[])

  function deleteNote(id) {
    const title=id
    try {
			axios.post("http://localhost:3000/delete", {
      title
			})
		} catch (error) {
			console.log(error)
		}
   window.location.reload(false);
  }

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;