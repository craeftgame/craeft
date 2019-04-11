import React, {Component} from "react";
import PropTypes from "prop-types";

import ItemDescription from "./ItemDescription";
import ItemIcon from "./ItemIcon";

export default class Equipment extends Component {

    static propTypes = {
        onUnequip: PropTypes.func,
        equipment: PropTypes.object
    };

    state = {
        selectedItem: null
    };

    constructor(props) {
        super(props);

        this.selectItem = this.selectItem.bind(this);
        this.unequip = this.unequip.bind(this);
    }

    selectItem(
        item
    ) {
        this.setState({
            selectedItem: this.state.selectedItem === item ? null : item
        })
    }

    unequip(
        item
    ) {
        this.setState({
            selectedItem: null
        });

        this.props.onUnequip(item);
    }

    render() {
        return (
            <div className='rpgui-container framed-grey row equipment'>

                <div>
                    <strong>Equipment:</strong>
                </div>

                <hr/>

                <div className='columns'>
                    <div className='column'>
                        Head:<br/>
                        {
                            this.props.equipment.head ?
                                <ItemIcon item={this.props.equipment.head}
                                          isSelected={this.props.equipment.head === this.state.selectedItem}
                                          onItemSelected={this.selectItem}/>
                                : <span className="rpgui-icon armor-slot"/>
                        }
                    </div>
                    <div className='column'>
                        Body:<br/>
                        {
                            this.props.equipment.body ?
                                <ItemIcon item={this.props.equipment.body}
                                          isSelected={this.props.equipment.body === this.state.selectedItem}
                                          onItemSelected={this.selectItem}/>
                                : <span className="rpgui-icon armor-slot"/>
                        }
                    </div>
                </div>

                <div className='columns'>
                    <div className='column'>
                        Legs:<br/>
                        {
                            this.props.equipment.legs ?
                                <ItemIcon item={this.props.equipment.legs}
                                          isSelected={this.props.equipment.legs === this.state.selectedItem}
                                          onItemSelected={this.selectItem}/>
                                : <span className="rpgui-icon armor-slot"/>
                        }
                    </div>
                    <div className='column'>
                        Feet:<br/>
                        {
                            this.props.equipment.feet ?
                                <ItemIcon item={this.props.equipment.feet}
                                          isSelected={this.props.equipment.feet === this.state.selectedItem}
                                          onItemSelected={this.selectItem}/>
                                : <span className="rpgui-icon armor-slot"/>
                        }
                    </div>
                </div>

                <div className='columns'>
                    <div className='column'>
                        Left Hand:<br/>
                        {
                            this.props.equipment["left-hand"] ?
                                <ItemIcon item={this.props.equipment["left-hand"]}
                                          isSelected={this.props.equipment["left-hand"] === this.state.selectedItem}
                                          onItemSelected={this.selectItem}/>
                                : <span className="rpgui-icon weapon-slot"/>
                        }
                    </div>
                    <div className='column'>
                        Right Hand:<br/>
                        {
                            this.props.equipment["right-hand"] ?
                                <ItemIcon item={this.props.equipment["right-hand"]}
                                          isSelected={this.props.equipment["right-hand"] === this.state.selectedItem}
                                          onItemSelected={this.selectItem}/>
                                : <span className="rpgui-icon weapon-slot"/>
                        }
                    </div>
                </div>

                <div className='columns'>

                    <div className='column'>
                        Jewlery 1:<br/>
                        <span className="rpgui-icon ring-slot"/>
                    </div>
                    <div className='column'>
                        Jewlery 2:<br/>
                        <span className="rpgui-icon ring-slot"/>
                    </div>
                </div>

                {
                    this.state.selectedItem && this.state.selectedItem.equiped ?
                        <div>
                            <hr/>
                            <ItemDescription item={this.state.selectedItem}
                                             onUnequip={this.unequip}/>
                        </div> : null
                }

            </div>
        )
    }
}