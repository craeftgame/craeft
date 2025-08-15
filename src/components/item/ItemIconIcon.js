import React, { Component } from "react";
import { ItemCategories, ResourceTypes } from "@craeft/engine/dist/data/types";
import PropTypes from "prop-types";

export default class ItemIconIcon extends Component {
    static propTypes = {
        item: PropTypes.object,
        isSmall: PropTypes.bool,
    };

    render() {
        const itemClasses = ["rpgui-icon"];

        if (this.props.isSmall) {
            itemClasses.push("icon-small");
        }

        // evaluate item type
        if (this.props.item.category === ItemCategories.Weapon) {
            itemClasses.push("sword");
        } else if (this.props.item.category === ItemCategories.Armor) {
            itemClasses.push("shield");
        }

        // evaluate material
        if (this.props.item.material === ResourceTypes.Wood) {
            itemClasses.push("wood");
        } else if (this.props.item.material === ResourceTypes.Metal) {
            itemClasses.push("metal");
        } else if (this.props.item.material === ResourceTypes.Cloth) {
            itemClasses.push("cloth");
        } else if (this.props.item.material === ResourceTypes.Diamond) {
            itemClasses.push("diamond");
        }

        return <div className={itemClasses.join(" ")} />;
    }
}
