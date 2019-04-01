import React, {Component} from 'react';

export default class Progress extends Component {


    render() {
        return (
            <div className={`rpgui-progress ${this.props.color}`}>

                <div className="rpgui-progress-track">
                    <div className={`rpgui-progress-fill ${this.props.color}`}
                         style={{
                             left: "0px",
                             width: `${this.props.filled}%`
                         }}>
                    </div>
                </div>

                <div className="rpgui-progress-left-edge">
                </div>
                <div className="rpgui-progress-right-edge">
                </div>

            </div>
        )
    }
};