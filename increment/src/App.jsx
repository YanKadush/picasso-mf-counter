import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Increment from "./Increment";

const App = () => (
    <>
        <Increment />
    </>
);
ReactDOM.render(<App />, document.getElementById("app"));
