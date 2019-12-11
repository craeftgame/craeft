import React, {Component} from "react";

// structure
import Footer from "./components/structure/Footer";
import Header from "./components/structure/Header";

// game
import CraeftComponent from "./components/pages/Craeft"

export default class CraeftPage extends Component {

    render() {
        return (

            <div className="rpgui-content container">

                <Header/>

                <CraeftComponent/>

                <Footer/>

            </div>
        );
    }
}
