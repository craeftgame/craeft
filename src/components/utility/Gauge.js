import Progress from "./Progress";
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Gauge extends Component {

    static propTypes = {
        label: PropTypes.string,
        current: PropTypes.number,
        color: PropTypes.string,
        max: PropTypes.number
    };

    render() {
        return (
            <div className='row'>

                <span className='nowrap'>
                    {this.props.label}: {Math.floor(this.props.current)}/{Math.floor(this.props.max)}
                </span>

                <Progress color={this.props.color}
                          filled={100 / this.props.max * this.props.current}/>

            </div>
        )
    }
}