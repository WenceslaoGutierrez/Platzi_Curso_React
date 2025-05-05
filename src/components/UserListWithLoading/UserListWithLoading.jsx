import { useEffect, useState } from "react";

const UserListWithLoading = () =>{
    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        const fetchUsers = async () =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok){
                    throw new Error ("Error at retrieving data")
                }
                const data = await response.json()
                setUsers(data)
            }
            catch (error){
                setError(error);
            }finally{
                setIsLoading(false);
            }
        }
        fetchUsers();

    },[])

    if(isLoading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>Error {error}</p>
    }

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

export default UserListWithLoading;