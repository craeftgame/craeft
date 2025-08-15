import React, { Component } from "react";
import Attribute from "../utility/Attribute";
import Gauge from "../utility/Gauge";
import PropTypes from "prop-types";
import Player from "@craeft/engine/dist/player";

export default class PlayerDescription extends Component {
    static propTypes = {
        player: PropTypes.instanceOf(Player),
    };

    render() {
        return (
            <>
                <div className="row">
                    <div>
                        <Attribute
                            label={this.props.player.className()}
                            value={this.props.player.name}
                        />
                    </div>

                    <div>
                        <Attribute
                            label="Str"
                            value={this.props.player.str()}
                        />
                        <Attribute
                            label="Vit"
                            value={this.props.player.vit()}
                        />
                        <Attribute
                            label="Int"
                            value={this.props.player.int()}
                        />
                        <Attribute
                            label="Dex"
                            value={this.props.player.dex()}
                        />
                        <Attribute
                            label="Agi"
                            value={this.props.player.agi()}
                        />
                    </div>

                    <div>
                        <Attribute
                            label="Atk"
                            value={this.props.player.atk()}
                        />
                        <Attribute
                            label="Matk"
                            value={this.props.player.matk()}
                        />
                        <Attribute
                            label="Def"
                            value={this.props.player.def()}
                        />
                        <Attribute
                            label="Mdef"
                            value={this.props.player.mdef()}
                        />
                    </div>
                </div>

                <hr />

                <div className="row columns">
                    <div className="column">
                        <Attribute
                            label="Level"
                            value={this.props.player.level}
                        />

                        <hr />

                        <Gauge
                            label="EXP"
                            max={this.props.player.expMax}
                            current={this.props.player.expCurrent}
                        />
                    </div>

                    <div className="column">
                        <Gauge
                            label="HP"
                            color="red"
                            max={this.props.player.hpMax}
                            current={this.props.player.hpCurrent}
                        />

                        <Gauge
                            label="STA"
                            color="green"
                            max={this.props.player.staMax}
                            current={this.props.player.staCurrent}
                        />
                    </div>
                </div>
            </>
        );
    }
}
