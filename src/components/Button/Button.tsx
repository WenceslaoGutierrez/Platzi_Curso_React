type ButtonProps ={
    onClick: () => void;
    label: string| number;
}

const Button = ({onClick, label}: ButtonProps) =>{
    return(
        <>
            <button onClick={onClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">{label}</button>
        </>
    )
}

export default Button;