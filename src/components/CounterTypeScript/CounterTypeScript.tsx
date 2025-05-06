import { useState } from "react";

const CounterTypeScript = () =>{
    const [count,setCount]=useState<number>(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white shadow rounded-md w-80 mx-auto">
                <p className="text-lg font-semibold text-gray-800">Counter: {count}</p>
                <div className="flex gap-4">
                    <button onClick={increment}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow transition">
                        Increase
                    </button>
                    <button onClick={decrement}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow transition">
                        Decrease
                    </button>
                </div>
            </div>
        </>
    )
}

export default CounterTypeScript;