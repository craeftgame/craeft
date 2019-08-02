import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./css/rpgui.css"
import "bulma/css/bulma.min.css"
import "./css/Craeft.css"

import {ReactComponent as Filters} from "./assets/filters.svg"

import CraeftPage from "./CraeftPage";
import AboutPage from "./AboutPage";

window.addEventListener("hashchange", render, false);

function render() {
    let page = window
        .location
        .hash
        .substr(
            1,
            window.location.hash.length
        );

    let component;

    const title = "Cräft!";

    switch (page) {
        case "about":
            component = <AboutPage/>;

            window.document.title = `${title} - About`;
            break;

        case "craeft":
        default:
            component = <CraeftPage/>;
            window.document.title = title;
            break;
    }

    ReactDOM.render(
        <div>
            <Filters/>
            {component}
        </div>,
        document.getElementById("root")
    );

    window.scroll(0, 0);
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
