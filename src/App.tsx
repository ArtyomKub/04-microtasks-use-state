import React, {useState} from 'react';
import './App.css';

function App() {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log((a))
    }

    const onResetClickHandler = () => {
        setA(a = 0)
        console.log((a))
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onResetClickHandler}>Reset</button>
        </div>
    );
}

export default App;
