import React, {Component} from "react";
import PropTypes from "prop-types";
import {ItemCategories} from "../engine/data/types";
import {ItemNames} from "../engine/data/names";
import ItemStats from "./ItemStats";

export default class PreItemDescription extends Component {

    static propTypes = {
        preItem: PropTypes.object
    };

    render() {
        return (
            <div className='rpgui-container framed-grey item columns'>

                <div className={"column row item-icon"}>

                    {
                        this.props.preItem.category === ItemCategories.Weapon ?
                            <span className="rpgui-icon sword"/> : null
                    }

                    {
                        this.props.preItem.category === ItemCategories.Armor ?
                            <span className="icon">
                                <i className="fas fa-shield-alt"/>
                            </span> : null
                    }

                </div>

                <div className={"column item-description"}>

                    <div className={"row"}>
                        Type: {ItemNames[this.props.preItem.type]}
                    </div>

                    <ItemStats item={this.props.preItem}/>

                </div>

            </div>
        )
    }
}