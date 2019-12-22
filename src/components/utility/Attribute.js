import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Attribute extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        value2: PropTypes.any,
    };

    render() {
        return (
            <>
                <div className="attribute-label">{this.props.label}:&nbsp;</div>

                <span>{this.props.value}</span>

                {
                    this.props.value2 ?
                        <span>-{this.props.value2}&nbsp;</span> : <>&nbsp;</>
                }
            </>
        )
    }
}
