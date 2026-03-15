import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

function ColorSelector() {
    const { color, setColor } = useContext(ColorContext);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
        <header>
            <h1>Sticky Notes App</h1>
        </header>
        <div className="note-input">
            <label htmlFor="colorPicker">Select Note Color: </label>
            <input
                type="color"
                id="colorPicker"
                value={color}
                onChange={handleColorChange}
            />
        </div>
        </>
    );
}

export default ColorSelector;