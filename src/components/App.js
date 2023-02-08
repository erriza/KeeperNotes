import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./../notes"
import CreateArea from "./CreateArea";


function App() {

  //! Agregar backend para poder guardar las notas en una base de datos mongoDB

  const [newNotes, setNewNotes] = useState(notes)

  function addNote(note){
    setNewNotes(prevNotes => {
      return [...prevNotes, note]
    })
  }

  function deleteNote(id) {
    setNewNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {newNotes.map((noteItem, index) => <Note 
            key={noteItem.index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
        />)}
      <Footer />
    </div>
  );
}

export default App;
