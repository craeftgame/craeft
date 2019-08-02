import React, {Component} from "react";
import ItemDescription from "./ItemDescription";
import ItemIcon from "./ItemIcon";
import PropTypes from "prop-types";

export default class Items extends Component {

    static propTypes = {
        items: PropTypes.array,
        onItemEquip: PropTypes.func
    };

    state = {
        selectedItem: null
    };

    constructor(props) {
        super(props);

        this.selectItem = this.selectItem.bind(this);
        this.equip = this.equip.bind(this);
    }

    selectItem(
        item
    ) {
        if (!item.delay.isDelaying) {

            let i = item;
            if (this.state.selectedItem === item) {
                i = null
            }
            this.setState({
                selectedItem: i
            })
        }
    }

    equip(
        item
    ) {
        this.props.onItemEquip(item);

        if (item.equipped) {
            this.setState({
                selectedItem: null
            });
        }

    }

    render() {
        return (
            <div className='items column frame'>
                <div className='rpgui-container framed'>

                    <div className={"row"}>
                        <strong>Items:</strong>
                        <hr/>
                    </div>

                    {
                        this.state.selectedItem && !this.state.selectedItem.equipped ?

                            <div className='rpgui-container framed-grey item row'>
                                <ItemDescription item={this.state.selectedItem}
                                                 onEquip={this.equip}/>
                            </div> : null
                    }

                    <div>

                        {
                            this.props.items.filter((item) => {
                                return !item.equipped
                            }).length > 0 ?
                                this.props.items
                                    .filter((item) => {
                                        return !item.equipped
                                    })
                                    .map((item, index) => {
                                        return (
                                            <ItemIcon key={index} item={item}
                                                      isSelected={item === this.state.selectedItem}
                                                      isSmall={false} onItemSelected={this.selectItem}/>
                                        )
                                    }) : <div className='row'>go Cräft!</div>
                        }

                    </div>

                </div>
            </div>
        )
    }
}