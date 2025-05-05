const StaticConponent = () => {
    const items = ["Banana", "Cherry","Avocado"];

    return (
        <>
            <ul>
                <h1>Static Data</h1>
                {
                    items.map((item,index) =>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default StaticConponent;