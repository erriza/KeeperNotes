import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [zoom, SetZoom] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  const submitNote = (event) => {
    props.onAdd(note)
    setNote({
        title:"",
        content:""
    })
    event.preventDefault();
  }

  function expand() {
    SetZoom(true)
  }

  return (
    <div>
      <form className="create-note">
        {zoom ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={zoom ? 3 : 1}
        />
        <Zoom in={zoom}>
            <Fab onClick={submitNote}>
                <AddIcon/>
            </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;