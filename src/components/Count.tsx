import React from 'react'

const Count = () => {
    const [count, setCount] = React.useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Count
