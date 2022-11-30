import styled from "@emotion/styled"
import {  useState } from "react"
import { handleClick, handleClickDiminush } from "../helpers/handleClick"

import "./Counter.css"

const BtnDiminish = styled.button`
    color: white;
    padding: 1rem;
    background-color: #4e1313;
    border: none;
    &:hover{
        background-color:#812121 ;
        font-weight: bold;
    }
`
const Counter = ()=> {

    const [counter, setCounter] = useState(5)

   

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={ ()=> setCounter( handleClick(counter, 1) ) } style={{
                padding: "1rem",
                backgroundColor: "#739122",
                border: "none",
                marginRight: "5px"
            }}>Add</button>

            <BtnDiminish onClick={ ()=> setCounter( handleClickDiminush(counter, 1) ) }>Diminish</BtnDiminish>
        </div>
    )
}

export default Counter