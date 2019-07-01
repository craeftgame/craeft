import React, {Component} from "react";
import PropTypes from "prop-types";
import {ItemNames} from "../../engine/data/names";
import ItemStats from "./ItemStats";
import ItemIcon from "./ItemIcon";

export default class PreItemDescription extends Component {

    static propTypes = {
        preItem: PropTypes.object
    };

    render() {
        return (
            <div className='rpgui-container framed-grey item columns'>

                <ItemIcon item={this.props.preItem}/>

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