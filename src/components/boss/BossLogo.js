import React, {Component} from "react";
import PropTypes from "prop-types";

export default class BossLogo extends Component {

    static propTypes = {
        name: PropTypes.string,
        type: PropTypes.string,
    };

    render() {
        return (
            <div className="column">
                <div className="rpgui-container framed-grey">

                    <div className="boss-name">
                        {this.props.name}
                    </div>

                    <div className="boss-logo icon">
                        <i className={`fas fa-${this.props.type} fa-10x`}/>
                    </div>

                </div>
            </div>
        )
    }
}