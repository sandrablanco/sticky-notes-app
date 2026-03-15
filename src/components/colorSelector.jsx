import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

function ColorSelector() {
    const { color, setColor } = useContext(ColorContext);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
        <div>
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