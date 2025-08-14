/* globals craeft */
import React, { Component } from "react";
import PropTypes from "prop-types";
import ItemStats from "./ItemStats";
import Attribute from "../utility/Attribute";
import { Rarities } from "@craeft/engine/src/data/types";
import { RarityNames } from "@craeft/engine/src/data/names";

export default class ItemDescription extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        onUnequip: PropTypes.func,
        onEquip: PropTypes.func,
        onDisentchant: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.onDisentchant = this.onDisentchant.bind(this);
    }

    onDisentchant() {
        if (this.props.onDisentchant) {
            this.props.onDisentchant(this.props.item.id);
        }
    }

    render() {
        return (
            <div>
                <div>
                    <span
                        className={
                            this.props.item.rarity !== Rarities.Common
                                ? RarityNames[
                                      this.props.item.rarity
                                  ].toLowerCase()
                                : ""
                        }
                    >
                        {this.props.item.getName
                            ? this.props.item.getName()
                            : null}
                    </span>
                </div>

                <Attribute label="Level" value={this.props.item.level} />

                <ItemStats item={this.props.item} />

                {this.props.item.equipped ? (
                    <button
                        className={`rpgui-button ${craeft.player.isFarming ? "rpgui-disabled" : ""}`}
                        onClick={() => this.props.onUnequip(this.props.item)}
                    >
                        <span>Unequip</span>
                    </button>
                ) : (
                    <button
                        className={`rpgui-button ${craeft.player.isFarming ? "rpgui-disabled" : ""}`}
                        onClick={() => this.props.onEquip(this.props.item)}
                    >
                        <span>Equip</span>
                    </button>
                )}

                {!this.props.item.equipped ? (
                    <div className="">
                        <button
                            className="rpgui-button"
                            onClick={this.onDisentchant}
                        >
                            <span>Disentchant</span>
                        </button>
                    </div>
                ) : null}
            </div>
        );
    }
}
