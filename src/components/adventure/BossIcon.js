import React, {Component} from "react";
import PropTypes from "prop-types";

export default class BossIcon extends Component {

    static propTypes = {
        type: PropTypes.string,
        isDead: PropTypes.bool,
        isSelected: PropTypes.bool,
        onClick: PropTypes.func
    };

    render() {
        return (
            <div className="rpgui-container framed-grey boss-icon rpgui-cursor-point"
                 onClick={this.props.onClick}>
                <div className={`boss-icon-wrap ${this.props.isSelected ? "icon-selected" : ""}`}>

                    <div className="icon">
                        <i className={`fas fa-${this.props.type} fa-2x`}/>
                    </div>

                    {
                        this.props.isDead ?
                            <div className="icon boss-dead">
                                <i className="fas fa-skull"/>
                            </div> : null
                    }

                </div>
            </div>

        )
    }
}