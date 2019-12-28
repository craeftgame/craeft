import React, {Component} from "react";
import PropTypes from "prop-types";

export default class BossIcon extends Component {

    static propTypes = {
        dead: PropTypes.bool,
        type: PropTypes.string,
        selected: PropTypes.bool
    };

    render() {
        return (
            <div className="rpgui-container framed-grey boss-icon rpgui-cursor-point">
                <div className={`boss-icon-wrap ${this.props.selected ? "icon-selected" : ""}`}>

                    <div className="icon">
                        <i className={`fas fa-${this.props.type} fa-2x`}/>
                    </div>

                    {
                        this.props.dead ?
                            <div className="icon boss-dead">
                                <i className="fas fa-skull"/>
                            </div> : null
                    }

                </div>
            </div>

        )
    }
}