import { useState } from "react"
import { ButtonComponent } from "./ButtonComponent";

export function InputComponent() {
    const [getInput, setInput] = useState("");
    return (
        <>
            <input type = "text" placeholder="Display and put your input over here" value = {getInput} onChange = {(events) => {
                setInput(events.target.value);
            }}></input><br></br>
            <ButtonComponent getInput = {getInput} setInput = {setInput}/>
        </>
    )
}
