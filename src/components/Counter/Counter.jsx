import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return{count: state.count + 1};
        
        case "decrement":
            return{count: state.count - 1};
        default:
            return state;
        
    }
}

const Counter = () =>{
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return(
        <>
            <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white shadow rounded-md w-80 mx-auto">
                <p className="text-lg font-semibold text-gray-800">Contador: {state.count}</p>
                <div className="flex gap-4">
                    <button onClick={() => dispatch({ type: "increment" })}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow transition">
                        Increase
                    </button>
                    <button onClick={() => dispatch({ type: "decrement" })}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow transition">
                        Decrease
                    </button>
                </div>
            </div>
        </>
    )

}

export default Counter;