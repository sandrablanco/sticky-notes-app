import { ColorProvider } from "./context/ColorContext";
import NoteBoard from "./components/NoteBoard";
import colorSelector from "./components/ColorSelector";

function App() {
  return (
    <ColorProvider>
      <colorSelector />
      <NoteBoard />
    </ColorProvider>
  );
}

export default App;

