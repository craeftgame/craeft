import React, {Component} from "react";
import {ItemCategories, ResourceTypes} from "../../engine/data/types";
import PropTypes from "prop-types";

export default class ItemIcon extends Component {

    static propTypes = {
        item: PropTypes.object,
        onItemSelected: PropTypes.func,
        isSelected: PropTypes.bool,
        isSmall: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.itemSelected = this.itemSelected.bind(this);
    }

    itemSelected() {
        if (this.props.onItemSelected) {
            this.props.onItemSelected(this.props.item)
        }
    }


    render() {
        const containerClasses = [
            "item-icon"
        ];

        // item disabled?
        if (this.props.item.delay && this.props.item.delay.isDelaying) {
            containerClasses.push("rpgui-disabled")
        } else if (this.props.item.rarity) {
            containerClasses.push(Symbol.keyFor(this.props.item.rarity));
        }

        // item selected?
        if (this.props.isSelected) {
            containerClasses.push("item-icon-selected")
        }

        const itemClasses = [
            "rpgui-icon"
        ];

        if (this.props.isSmall) {
            itemClasses.push("icon-small")
        }

        // evaluate item type
        if (this.props.item.category === ItemCategories.Weapon) {
            itemClasses.push("sword")
        } else if (this.props.item.category === ItemCategories.Armor) {
            itemClasses.push("shield")
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

        return (
            <div className="rpgui-container rpgui-cursor-point framed-grey item-container"
                 onClick={this.itemSelected}>

                <div className={containerClasses.join(" ")}>

                    <div className={itemClasses.join(" ")}/>

                    {
                        !(this.props.item.delay && this.props.item.delay.isDelaying) ?
                            <span className='item-level'>
                                {this.props.item.level}
                            </span> : null
                    }

                    {
                        this.props.item.delay && this.props.item.delay.isDelaying ?
                            <div className='item-timeout nowrap'>
                                <span>{this.props.item.delay.timer.getTimeoutString()}</span>
                            </div> : null
                    }

                </div>

            </div>
        )
    }
}