/* globals craeft */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Boss from "@craeft/engine/src/boss/boss";
import { WeaponSlots } from "@craeft/engine/src/data/types";
import ItemIconIcon from "../item/ItemIconIcon";

export default class Fight extends Component {
    static propTypes = {
        boss: PropTypes.instanceOf(Boss),
    };

    render() {
        return (
            <div>
                <div>
                    <span>{this.props.boss.name}</span> vs.{" "}
                    <span>{craeft.player.name}</span>
                </div>

                <div className="row fight">
                    <div className="columns nowrap">
                        <div className="column">
                            <span className="icon fight-item left">
                                <i
                                    className={`fas fa-${this.props.boss.type} fa-2x`}
                                />
                            </span>
                        </div>

                        <div className="column">
                            <div className="sparks">
                                <span className="spark">*</span>
                                <span className="spark">*</span>
                                <span className="spark">*</span>
                                <span className="spark">*</span>
                                <span className="spark">*</span>
                            </div>

                            <div className="icon fight-item middle">
                                <i className="fas fa-bolt fa-4x" />
                            </div>
                        </div>

                        <div className="column">
                            <div className="fight-item right">
                                <ItemIconIcon
                                    item={
                                        craeft.player.equipment[
                                            WeaponSlots.RightHand
                                        ]
                                    }
                                    isSmall={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
