import React, { Component } from "react";
import PropTypes from "prop-types";
import { ItemNames } from "@craeft/engine/dist/data/names";
import ItemIcon from "./ItemIcon";
import PreItemStats from "./PreItemStats";
import PreItem from "@craeft/engine/dist/items/PreItem";

export default class PreItemDescription extends Component {
    static propTypes = {
        preItem: PropTypes.instanceOf(PreItem),
    };

    render() {
        return (
            <div className="rpgui-container framed-grey item columns">
                <ItemIcon item={this.props.preItem} />

                <div className={"column item-description"}>
                    <div className={"row"}>
                        Type: <span>{ItemNames[this.props.preItem.type]}</span>
                    </div>

                    <PreItemStats item={this.props.preItem} />
                </div>
            </div>
        );
    }
}
