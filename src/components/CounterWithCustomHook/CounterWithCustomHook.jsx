import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () =>{
    const {count,
        increment,
        decrement,
        reset} = useCounter (1);

        return (
            <>
                <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md text-center space-y-4">
                    <p className="text-xl font-semibold text-gray-800">Counter: {count}</p>
                    <div className="flex justify-center gap-4">
                        <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">
                            Increment
                        </button>
                        
                        <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition">
                            Decrement
                        </button>
                        
                        <button onClick={reset} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">
                            Reset
                        </button>
                    </div>
                </div>
            </>)
}

export default CounterWithCustomHook;