import { useEffect, useState } from "react";

const UserList = () =>{
    const [users,setUsers] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching data: ", error))
    },[])

    return(
        <>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-medium mb-4 text-center">Dynamic Data</h1>
                <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
                <ul className="space-y-4">
                    {users.map((user) => (
                    <li key={user.id} className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                        <p className="text-sm text-gray-600">City: {user.address.city}</p>
                        <p className="text-sm text-gray-600">Email: {user.email}</p>
                        <p className="text-sm text-gray-600">{user.phone}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default UserList;