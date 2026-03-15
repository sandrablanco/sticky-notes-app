import { useState, useContext } from "react";
import useNotes from "../hook/useNotes";
import { ColorContext} from "../context/ColorContext";
import Note from "./Note";

function NoteBoard() {
    const { notes, addNote, deleteNote } = useNotes();
    const { color } = useContext(ColorContext);
    const [noteText, setNoteText] = useState("");
    const handleAddNote = () => {
        if (noteText.trim() !== "") {
            addNote(noteText, color);
            setNoteText("");
        }
    };

    return (
        <body>
        <div className="note-board">
            <div className="note-input">
                <input text="text" value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="Write a note..." />
                <button onClick={handleAddNote}>Add Note</button>
            </div>
            <div className="notes-container">
                  {notes.length === 0 ? ( <p>No notes yet</p>) : ( //si no hay notas, muestro un mensaje, sino muestro las notas
                   notes.map((note) => (
                       <Note key={note.id} note={note} deleteNote={deleteNote} />
                          ))
                       )}
            </div>
        </div>
        </body>
    );
}

export default NoteBoard;