import { useState, useEffect } from "react";

const CounterWithEffect = () =>{
    const [count, SetCount] = useState(0);

    useEffect( ()=>{
        console.log(`Counter changed to: ${count}`)
    },[count]);
    
    return(
        <>
            <p>Counter is at: {count}</p>
            <button onClick={()=>SetCount(count+1)}>Increase</button>
            
        </>
    )
}

export default CounterWithEffect;