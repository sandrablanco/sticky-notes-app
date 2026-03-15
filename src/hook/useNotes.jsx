import {useState, useEffect} from 'react';
const colors = [ //diferentes colores para las notas.
    "#f90808",
    "#b77524",
    "#129831",
    "#3d8ab4",
    "#eb68a3",
    "#bdb2ff"
];
const useNotes = () => {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes"); //useEffect para el localStorage que me guarde las notas
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    const addNote = (text, color) => {
        let noteColor = color && colors[Math.floor(Math.random() * colors.length)]; //si no se pasa un color, asigno uno aleatorio
        const id = Date.now();
        const newNote = {
            id: id,
            text: text,
            color: noteColor //asigno el color especificado o un color aleatorio a cada nota
        };

        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };
        const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => {
            return note.id !== id;
        });

        setNotes(filteredNotes);
    };
        useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return { notes, addNote, deleteNote };
};

export default useNotes;
