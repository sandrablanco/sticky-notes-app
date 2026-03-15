import { ColorProvider } from "./context/ColorContext";
import NoteBoard from "./components/NoteBoard";
import ColorSelector from "./components/ColorSelector";
import "./App.css";

function App() {
  return (
    <ColorProvider>
      <ColorSelector />
      <NoteBoard />
    </ColorProvider>
  );
}

export default App;

