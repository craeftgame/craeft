import React, { Component } from "react";
import PropTypes from "prop-types";

import ItemDescription from "../item/ItemDescription";
import ItemIcon from "../item/ItemIcon";
import { ArmorSlots, WeaponSlots } from "@craeft/engine/src/data/types";

export default class Equipment extends Component {
    static propTypes = {
        onUnequip: PropTypes.func,
        equipment: PropTypes.object,
    };

    state = {
        selectedItem: null,
    };

    constructor(props) {
        super(props);

        this.toggleItemSelection = this.toggleItemSelection.bind(this);
        this.unequip = this.unequip.bind(this);
    }

    toggleItemSelection(item) {
        this.setState({
            selectedItem: this.state.selectedItem === item ? null : item,
        });
    }

    unequip(item) {
        this.props.onUnequip(item.id);

        if (!item.equipped) {
            this.toggleItemSelection(item);
        }
    }

    render() {
        return (
            <div className="rpgui-container framed-grey row equipment">
                <div>
                    <strong>Equipment</strong>
                </div>

                <hr />

                <div className="columns">
                    <div className="column">
                        Head
                        <br />
                        {this.props.equipment[ArmorSlots.Head] ? (
                            <ItemIcon
                                item={this.props.equipment[ArmorSlots.Head]}
                                isSelected={
                                    this.props.equipment[ArmorSlots.Head] ===
                                    this.state.selectedItem
                                }
                                isSmall={true}
                                onItemSelected={this.toggleItemSelection}
                            />
                        ) : (
                            <span className="rpgui-icon armor-slot" />
                        )}
                    </div>
                    <div className="column">
                        Body
                        <br />
                        {this.props.equipment[ArmorSlots.Body] ? (
                            <ItemIcon
                                item={this.props.equipment[ArmorSlots.Body]}
                                isSelected={
                                    this.props.equipment[ArmorSlots.Body] ===
                                    this.state.selectedItem
                                }
                                isSmall={true}
                                onItemSelected={this.toggleItemSelection}
                            />
                        ) : (
                            <span className="rpgui-icon armor-slot" />
                        )}
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        Legs
                        <br />
                        {this.props.equipment[ArmorSlots.Legs] ? (
                            <ItemIcon
                                item={this.props.equipment[ArmorSlots.Legs]}
                                isSelected={
                                    this.props.equipment[ArmorSlots.Legs] ===
                                    this.state.selectedItem
                                }
                                isSmall={true}
                                onItemSelected={this.toggleItemSelection}
                            />
                        ) : (
                            <span className="rpgui-icon armor-slot" />
                        )}
                    </div>
                    <div className="column">
                        Feet
                        <br />
                        {this.props.equipment[ArmorSlots.Feet] ? (
                            <ItemIcon
                                item={this.props.equipment[ArmorSlots.Feet]}
                                isSelected={
                                    this.props.equipment[ArmorSlots.Feet] ===
                                    this.state.selectedItem
                                }
                                isSmall={true}
                                onItemSelected={this.toggleItemSelection}
                            />
                        ) : (
                            <span className="rpgui-icon armor-slot" />
                        )}
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        Left Hand:
                        <br />
                        {this.props.equipment[WeaponSlots.LeftHand] ? (
                            <ItemIcon
                                item={
                                    this.props.equipment[WeaponSlots.LeftHand]
                                }
                                isSelected={
                                    this.props.equipment[
                                        WeaponSlots.LeftHand
                                    ] === this.state.selectedItem
                                }
                                isSmall={true}
                                onItemSelected={this.toggleItemSelection}
                            />
                        ) : (
                            <span className="rpgui-icon weapon-slot" />
                        )}
                    </div>
                    <div className="column">
                        Right Hand
                        <br />
                        {this.props.equipment[WeaponSlots.RightHand] ? (
                            <ItemIcon
                                item={
                                    this.props.equipment[WeaponSlots.RightHand]
                                }
                                isSelected={
                                    this.props.equipment[
                                        WeaponSlots.RightHand
                                    ] === this.state.selectedItem
                                }
                                isSmall={true}
                                onItemSelected={this.toggleItemSelection}
                            />
                        ) : (
                            <span className="rpgui-icon weapon-slot" />
                        )}
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        Jewelry 1<br />
                        <span className="rpgui-icon ring-slot" />
                    </div>

                    <div className="column">
                        Jewelry 2<br />
                        <span className="rpgui-icon ring-slot" />
                    </div>
                </div>

                {this.state.selectedItem && this.state.selectedItem.equipped ? (
                    <div>
                        <hr />

                        <ItemDescription
                            item={this.state.selectedItem}
                            onUnequip={this.unequip}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}
