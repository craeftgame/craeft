import React, {Component} from "react";
import PropTypes from "prop-types";
import ItemIconIcon from "./ItemIconIcon";

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
            containerClasses.push("icon-selected")
        }

        return (
            <div className="rpgui-container rpgui-cursor-point framed-grey item-container"
                 onClick={this.itemSelected}>

                <div className={containerClasses.join(" ")}>

                    <ItemIconIcon item={this.props.item}
                                  isSmall={this.props.isSmall}/>

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