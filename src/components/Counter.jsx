import {  useState } from "react"
import "./Counter.css"

const Counter = ()=> {

    const [counter, setCounter] = useState(5)

    const handleClick = () => {
        setCounter(counter + 1)
    }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={ handleClick } style={{
                padding: "1rem",
                backgroundColor: "#739122",
                border: "none"
            }}>Add</button>
        </div>
    )
}

export default Counter