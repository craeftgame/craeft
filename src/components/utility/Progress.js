import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Progress extends Component {

    static propTypes = {
        color: PropTypes.string,
        filled: PropTypes.number,
        showPercent: PropTypes.bool
    };

    render() {
        return (
            <div className={`rpgui-progress ${this.props.color}`}>

                <div className="rpgui-progress-track">

                    {
                        this.props.showPercent ?
                            <div className="progress-percent">
                                <span className="is-size-6 rtl">
                                    {
                                        this.props.filled
                                            .toFixed(0)
                                            .toLocaleString()
                                    }%
                                </span>
                            </div> : null
                    }

                    <div className={`rpgui-progress-fill ${this.props.color}`}
                         style={{
                             left: "0px",
                             width: `${this.props.filled}%`
                         }}>
                    </div>

                </div>

                <div className="rpgui-progress-left-edge"/>

                <div className="rpgui-progress-right-edge"/>

            </div>
        )
    }
}