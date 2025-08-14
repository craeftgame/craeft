/* globals craeft */
import React, { Component } from "react";
import PropTypes from "prop-types";
import BossIcon from "./BossIcon";
import BossDescription from "./BossDesctiption";
import Map from "../map/Map";
import PlayerDescription from "../player/PlayerDescription";
import Logs from "../Logs";

import config from "@craeft/engine/config";

export default class Adventure extends Component {
    static propTypes = {
        onMove: PropTypes.func,
    };

    state = {
        selected: craeft.bosses[0],
    };

    constructor(props) {
        super(props);

        this.selectBoss = this.selectBoss.bind(this);
    }

    fight(id) {
        const boss = craeft.bosses.findById(id);

        console.log(boss.name);
    }

    selectBoss(id) {
        this.setState({
            selected: craeft.bosses.findById(id),
        });
    }

    render() {
        return (
            <div className="adventure frame">
                <div className="rpgui-container framed">
                    <div className="row">
                        <strong>Adventure</strong>
                        <hr />
                    </div>

                    <div className="row">
                        <div className="columns">
                            <div className="column">
                                <PlayerDescription player={craeft.player} />

                                <Logs />
                            </div>

                            <div className="column">
                                <Map onMove={this.props.onMove} />
                            </div>

                            <div className="column">
                                {config.showBossScreen ? (
                                    <>
                                        <div className="boss-name">
                                            <span>
                                                {this.state.selected.name}
                                            </span>
                                        </div>

                                        <div>
                                            {craeft.bosses.map((boss) => {
                                                return (
                                                    <BossIcon
                                                        key={`boss-${boss.name}`}
                                                        type={boss.type}
                                                        isDead={boss.dead}
                                                        isSelected={
                                                            boss ===
                                                            this.state.selected
                                                        }
                                                        onClick={() =>
                                                            this.selectBoss(
                                                                boss.id,
                                                            )
                                                        }
                                                    />
                                                );
                                            })}
                                        </div>

                                        <BossDescription
                                            boss={this.state.selected}
                                            fight={() =>
                                                this.fight(
                                                    this.state.selected.id,
                                                )
                                            }
                                        />
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
