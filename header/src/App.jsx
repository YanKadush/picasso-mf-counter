import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { Header } from "./Header";
import Increment from "increment/Increment";
import Decrement from "decrement/Decrement";

const App = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        if (counter === 0) {
            return setCounter(0)
        }
        setCounter(counter - 1)
    }

    return (
        <div className="App">
            <div className="AppWrapper">
                <Header counter={counter}/>
                <div className="BtnWrapper">
                    <Decrement handleDecrement={handleDecrement}/>
                    <Increment handleIncrement={handleIncrement}/>
                </div>
            </div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("app"));
