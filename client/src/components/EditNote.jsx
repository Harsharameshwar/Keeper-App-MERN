import React ,{useState} from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
function Example(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false); 


    const [note, setNote] = useState({
        id:props.id,
        title: props.title,
        content: props.content 
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

    function handleShow(){
        setShow(true)
        console.log(props.id);
   
        
    }
    async function EditSubmit(){
        try {
            await axios.post("http://localhost:3000/editnote", {
            note
             })
      
              } catch (error) {
                  console.log(error)
              }
              window.location.reload(false);
    }
  
    return (
      <>
        <button className="edit" onClick={handleShow}>
          EDIT
        </button>
        <Modal show={show} onHide={handleClose}>
        <form onSubmit={EditSubmit}> 
          <Modal.Body>
          <input
          onChange={handleChange}
          name="title"
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
         <button type="submit">EDIT</button>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  
export default Example;