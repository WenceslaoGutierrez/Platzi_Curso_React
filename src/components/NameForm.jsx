import { useState } from "react";

const NameForm = () =>{
    const [name,setName] = useState ("");

    return (
        <>
            <h1>Name Form</h1>
            <input type="text" placeholder="Enter your name" value={name} 
                onChange={(event) => setName(event.target.value)}>
            </input>   
            <p>Hi there, {name || "visitor"}!</p> 
        </>
    )
}

export default NameForm;