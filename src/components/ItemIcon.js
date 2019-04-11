import React, {Component} from "react";
import {ItemCategories} from "../engine/data/types";
import PropTypes from "prop-types";

export default class ItemIcon extends Component {

    static propTypes = {
        item: PropTypes.object,
        onItemSelected: PropTypes.func,
        isSelected: PropTypes.bool
    };

    render() {
        const classes = [
            "rpgui-icon",
            "framed",
            "item-icon"
        ];

        if (this.props.item.category === ItemCategories.Weapon) {
            classes.push("sword")
        } else if (this.props.item.category === ItemCategories.Armor) {
            classes.push("shield")
        }

        if (this.props.item.delay.isDelaying) {
            classes.push("rpgui-disabled")
        }

        if (this.props.isSelected) {
            classes.push("item-icon-selected")
        }

        return (
            <div className="rpgui-container framed-grey item-container"
                 onClick={() => this.props.onItemSelected(this.props.item)}>

                <div className={classes.join(" ")}>

                    {
                        !this.props.item.delay.isDelaying ?
                            <span className='item-level'>
                                {this.props.item.level}
                            </span> : null
                    }

                    {
                        this.props.item.delay.isDelaying ?
                            <span className='item-timeout'>
                                {this.props.item.delay.getTimeout()}
                            </span> : null
                    }

                </div>

            </div>
        )
    }
}