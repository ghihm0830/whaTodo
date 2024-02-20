import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  } //receive values of note object and do something with them from CreateArea (props.onAdd(note)) //return to set a new array

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote} //check dev tool to see if getting props
      />

      {notes.map((noteItem, index) => {
        return (
          <Note 
            key= {index}
            id= {index}
            title= {noteItem.title} 
            content= {noteItem.content}
            onDelete= {deleteNote}
          />
        )
      })}
      
      <Footer />
    </div>
  );
}

export default App;

//state used for things changed
//only use return when setting a new array (prevNote => {})
