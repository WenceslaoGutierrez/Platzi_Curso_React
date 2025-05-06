import React, { useCallback, useMemo, useState } from "react"

const Child = React.memo( ({counter}) =>{
    console.log("Rendering child")
    return <p className="text-xl font-semibold text-gray-800">Counter : {counter}</p>
})

function ExpensiveCalculation ({ num }) {
    const result = useMemo(() =>{
        console.log("Calculating ...")
        return num *2;
    }, [num])

    return <p className="text-xl font-bold text-gray-800">Result: {result}</p>
}

function CounterWithReactMemo() {
    const [counter,setCounter] =useState (0);

    const increment = useCallback(() => { setCounter(prev => prev + 1)})

    return(<>
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md text-center space-y-4">
            <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">Increase</button>
            <Child counter={counter}/>
            <ExpensiveCalculation num ={counter}/>
        </div>
    </>)
}

export default CounterWithReactMemo;