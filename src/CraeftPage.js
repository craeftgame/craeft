import React, { Component } from "react";
import PropTypes from "prop-types";

// structure
import Footer from "./components/structure/Footer";
import Header from "./components/structure/Header";

// game
import CraeftComponent from "./components/pages/Craeft";

export default class CraeftPage extends Component {
    static propTypes = {
        showFooter: PropTypes.bool.isRequired,
    };

    render() {
        return (
            <div className="rpgui-content container">
                <Header />

                <CraeftComponent />

                <Footer showFooter={this.props.showFooter} />
            </div>
        );
    }
}
