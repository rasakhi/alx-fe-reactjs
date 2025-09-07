import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <p>Current Count: {count}</p>
            <button style={{ backgroundColor: 'lightgreen' }} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{ backgroundColor: 'peachpuff' }} onClick={() => setCount(count - 1)}>Decrement</button>
            <button style={{ backgroundColor: 'orange' }} onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;