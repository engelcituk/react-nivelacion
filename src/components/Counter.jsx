import { Fragment, useState } from "react"

const Counter = ()=> {

    const [counter, setCounter] = useState(5)

    return(
        <Fragment>
            Counter: {counter}
        </Fragment>
    )
}

export default Counter