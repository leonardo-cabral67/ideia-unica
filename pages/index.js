import { useState } from "react"

function home() {
    return (
    <div>
        <h1>Home</h1>
        <Counter/>
    </div>
    )
}

function Counter() {
    const [counter, setCounter] = useState(1)
    const increaseCounter = () => setCounter(counter + 1)
    const decreaseCounter = () => setCounter(counter - 1)

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </div>
    )
}

export default home