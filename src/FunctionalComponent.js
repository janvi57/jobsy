import React, {useState} from 'react';

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);

    const IncrementFn = () => {
        setCount(pre => pre + 1);
    }

    const DecrementFn = () => {
        setCount(pre => pre - 1);
    }

    const ResetFn = () => {
        setCount(pre => 0);
    }

    return (
        <>
            <h1>Functional Component using Hooks</h1>
            <h1>count is {count}</h1>
            <button onClick={IncrementFn}>Increment</button>
            <button onClick={DecrementFn}>Decrement</button>
            <button onClick={ResetFn}>Reset</button>
        </>
    );
}

export default FunctionalComponent;