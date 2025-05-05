import { useState, useEffect } from "react";

const SearchPosts = () => {
    const [query,setQuery] = useState("");
    const [posts,setPosts] = useState([]);

    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((error) => console.error("Error fetching data: ", error))
    },[query])

    return(
        <>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-medium mb-4 text-center">Dynamic query</h1>
                <h2 className="text-2xl font-bold mb-4 text-center">Post List</h2>
                <input type="text" 
                    placeholder="Search by title" value={query} 
                    className="mb-6 w-full border rounded px-4 py-2"
                    onChange={(event) => setQuery(event.target.value)}/>
                <ul className="space-y-4">
                    {posts.map((post) => (
                    <li key={post.id} className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                        <p className="text-sm text-gray-600">Content: {post.body}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SearchPosts;