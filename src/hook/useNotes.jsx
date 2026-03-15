import {useState} from 'react';
const useNotes = () => {
    const [notes, setNotes] = useState([]);
    const addNote = (text, color) => {
        const id = Date.now();
        const note = {
            id: id,
            text: text,
            color: color
        };

        const newNotes = [...notes, note];
        setNotes(newNotes);
    };
        const deleteNote = (id) => {

        const filteredNotes = notes.filter((note) => {
            return note.id !== id;
        });

        setNotes(filteredNotes);
    };

    return { notes, addNote, deleteNote };
};

export default useNotes;
