import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Decrement from "./Decrement";

const App = () => (
    <>
        <Decrement />
    </>
);
ReactDOM.render(<App />, document.getElementById("app"));
