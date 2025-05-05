import { useState } from "react";
const Counter = () => {
    const [count, SetCount] = useState(0);

    return(
        <>
            <p>El contador está en: {count}</p>
            <button onClick={()=>SetCount(count+1)}>Incrementar</button>
            <button onClick={()=>SetCount(count-1)}>Decrementar</button>
        </>
    )
}
export default Counter;