import Progress from "./Progress";
import React, {Component} from "react";

export default class Gauge extends Component {

    render() {
        return (
            <div className='row'>
                <span>
                    {this.props.label}: {Math.floor(this.props.current)}/{Math.floor(this.props.max)}
                </span>
                <Progress color={this.props.color}
                          filled={100 / this.props.max * this.props.current}/>
            </div>
        )
    }
}