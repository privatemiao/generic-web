import React from "react";

export const Counter = ({
                            num,
                            increment,
                            decrement,
                            incrementAsync
                        }) => (
    <div>
        <h2>Number: {num}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementAsync}>+..</button>
    </div>
);

