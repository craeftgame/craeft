import React, { Component } from "react";
import Equipment from "./Equipment";
import PropTypes from "prop-types";
import PlayerDescription from "./PlayerDescription";
import Logs from "../Logs";

export default class Player extends Component {
    static propTypes = {
        player: PropTypes.object,
        onUnequip: PropTypes.func,
    };

    render() {
        return (
            <div className="rpgui-container framed player">
                <div className="row">
                    <strong>Cräfting</strong>
                    <hr />
                </div>

                <div className="row">
                    <div className="columns">
                        <div className="column">
                            <PlayerDescription player={this.props.player} />

                            <Logs />
                        </div>

                        <div className="column">
                            <Equipment
                                equipment={this.props.player.equipment}
                                onUnequip={this.props.onUnequip}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
