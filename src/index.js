import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./css/rpgui.css"
import "bulma/css/bulma.min.css"
import "./css/Craeft.css"

import Craeft from "./Craeft";
import About from "./About";

global.version = "v0.1.0";

console.log(global.version);

window.addEventListener("hashchange", render, false);

function render() {
    let page = window.location.hash.substr(1, window.location.hash.length);

    let component;

    switch (page) {
        case "about":
            component = <About/>;
            break;

        case "craeft":
        default:
            component = <Craeft/>;
            break;
    }

    ReactDOM.render(
        component,
        document.getElementById("root")
    );
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
