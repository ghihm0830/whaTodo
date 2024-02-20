import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false) 

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function expand() {
    setExpanded(true)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value //[]turn string "name" into actual value of the name
      } //save input values in state object-> check in dev tool
    })
  }

  function submitNote(event) {
    props.onAdd(note) //call the function from AddNote in App.jsx
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault(); //prevent being refreshed when submitting form
  }

  return (
    <div>
      <form className="create-note">

      {isExpanded && <input 
          onChange={handleChange} 
          value={note.title} 
          name="title"
           placeholder="Title" 
        />}

        {/* {isExpanded ? <input 
          onChange={handleChange} 
          value={note.title} 
          name="title"
           placeholder="Title" 
        /> : null} */}

        <textarea 
          onChange={handleChange} 
          onClick={expand}
          value={note.content} 
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} 
        />

        <Zoom in={isExpanded}>
        {/* show up the icon when expanded */}
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

//default behavior of form is refreshing the page
//only use return when setting a new array (prevNote => {})