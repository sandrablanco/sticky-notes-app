import useNotes from "../hook/useNotes";
function Note({ note, deleteNote }) {

  return (
    <div
      style={{
        backgroundColor: note.color,
        padding: "10px",
        margin: "10px"
      }}
    >

      <p>{note.text}</p>

      <button onClick={() => deleteNote(note.id)}>
        X
      </button>

    </div>
  );
}

export default Note;