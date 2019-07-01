import React, {Component} from "react";

import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import About from "./components/pages/About";

export default class AboutPage extends Component {

    render() {
        return (
            <div className='rpgui-content container'>

                <Header/>

                <About/>

                <Footer/>

            </div>
        )
    }
}
