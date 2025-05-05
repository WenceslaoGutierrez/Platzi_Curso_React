import { useState } from "react"

function useCounter(initialValue = 0){
    const [count,SetCount] =useState(initialValue)

    const increment = () => SetCount(prev => prev+1)
    const decrement = () => SetCount(prev => prev-1)
    const reset = () => SetCount(initialValue)

    return{
        count,
        increment,
        decrement,
        reset
    }
}
export default useCounter;