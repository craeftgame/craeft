import Progress from "./Progress";
import React, {Component} from "react";
import PropTypes from "prop-types";
import Attribute from "./Attribute";

export default class Gauge extends Component {

    static propTypes = {
        label: PropTypes.string,
        current: PropTypes.number,
        color: PropTypes.string,
        max: PropTypes.number
    };

    render() {
        return (
            <div className='row nowrap'>
                <Attribute label={this.props.label}
                           value={`${Math.floor(this.props.current)}/${Math.floor(this.props.max)}`}/>

                <Progress color={this.props.color}
                          filled={100 / this.props.max * this.props.current}/>
            </div>
        )
    }
}