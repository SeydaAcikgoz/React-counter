import React, {
    useEffect,
    useState
}from 'react';

const Counter = ({ initialCount = 0, step = 1 }) => {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount ? Number(savedCount) : initialCount;
    });
    const [stepValue, setStepValue] = useState(step);

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    const increment = () => {
        setCount((prev) => prev + stepValue)
    };
    const decrement = () => {
        setCount((prev) => prev - stepValue)
    };
    const reset = () => {
        setCount(initialCount)
    };

    return (
        <div 
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                display: 'flex',
            }}
        >
            <h1>Counter App</h1>
            <p
                style={{
                    fontWeight: 'bold',
                    fontSize: '30px'
                }}
            >
                {count}
            </p>
            <div>
                <button
                    style={{
                        backgroundColor: '#555',
                        borderRadius: '50%',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        fontSize: '20px',
                        border: 'none',
                        margin: '10px',
                        height: '50px',
                        width: '50px'
                    }}
                    onClick={increment}
                >
                    +
                </button>
                <button
                    style={{
                        backgroundColor: '#555',
                        borderRadius: '50%',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        fontSize: '20px',
                        border: 'none',
                        margin: '10px',
                        height: '50px',
                        width: '50px'
                    }}
                    onClick={decrement}
                >
                    -
                </button>
                <button
                    style={{
                        backgroundColor: '#555',
                        borderRadius: '50%',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        fontSize: '20px',
                        border: 'none',
                        margin: '10px',
                        height: '50px',
                        width: '50px'
                    }}
                    onClick={reset}
                >
                    0
                </button>
            </div>
            <div
                style={{
                    fontSize: '20px',
                    margin: '10px'
                }}
            >
                <label 
                    for="stepInput"
                >
                    Artım miktarı:
                </label>
                <input
                    id="stepInput"
                    type="number"
                    value={stepValue}
                    onChange={(e) => setStepValue(Number(e.target.value))}
                    style={{
                        borderRadius: '5px',
                        padding: '5px',
                        margin: '10px',
                        width: '50px',
                    }}
                />
            </div>
        </div>
    );
};

export default Counter;
