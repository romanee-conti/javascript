import React, { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.counter}>
            <button onClick={() => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter