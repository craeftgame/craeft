/* globals craeft */
import React, { Component } from "react";
import { ResourceTypes } from "@craeft/engine/src/data/types";
import PropTypes from "prop-types";

export default class Farm extends Component {
    static propTypes = {
        startFarming: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="farm column frame">
                <div className="rpgui-container framed">
                    <div className={"row"}>
                        <strong>Resources</strong>
                        <hr />
                    </div>

                    <div className="rpgui-container framed-grey resources">
                        <div className="columns">
                            <div className="column">Wood:</div>
                            <div className="column rtl">
                                <span>
                                    {craeft.resources[
                                        ResourceTypes.Wood
                                    ].toLocaleString()}
                                    &nbsp;
                                </span>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">Metal:</div>
                            <div className="column rtl">
                                <span>
                                    {craeft.resources[
                                        ResourceTypes.Metal
                                    ].toLocaleString()}
                                    &nbsp;
                                </span>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">Cloth:</div>
                            <div className="column rtl">
                                <span>
                                    {craeft.resources[
                                        ResourceTypes.Cloth
                                    ].toLocaleString()}
                                    &nbsp;
                                </span>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">Diamond:</div>
                            <div className="column rtl">
                                <span>
                                    {craeft.resources[
                                        ResourceTypes.Diamond
                                    ].toLocaleString()}
                                    &nbsp;
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={"row"}>
                        <button
                            className="rpgui-button"
                            onClick={this.props.startFarming}
                            disabled={
                                craeft.player.isFarming ||
                                craeft.player.staCurrent < 1 ||
                                craeft.player.dead
                            }
                        >
                            <span className="icon">
                                <i className="fas fa-tree" />
                            </span>

                            <span>
                                &nbsp;
                                {craeft.player.isFarming
                                    ? craeft.farm.timer.getTimeoutString()
                                    : "Farm!"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
