import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {

    static propTypes = {
        isActive: PropTypes.bool,
        onClose: PropTypes.func,
        children: PropTypes.node
    };

    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
    }

    close() {
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    render() {
        return (
            <div className={`modal ${this.props.isActive ? "is-active" : ""}`}>
                <div className="modal-background"/>

                <div className="modal-content">

                    {this.props.children}

                </div>

                <button className="modal-close is-large"
                        onClick={this.close}
                        aria-label="close">
                </button>

            </div>
        )
    }
}