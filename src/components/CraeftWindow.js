import React, {Component} from 'react';
import '../../node_modules/RPGUI/dist/rpgui.min.js';
import Slider from "./Slider";
import {ItemCategories} from "../engine/craefter/types";

export default class CraeftWindow extends Component {

    state = {
        wood: 0,
        metal: 0,
        cloth: 0,
        diamond: 0,
        preItem: null
    };

    constructor(props) {
        super(props);

        this.updateResource = this.updateResource.bind(this);
        this.craeft = this.craeft.bind(this);
    }

    updateResource(which, value) {
        this.setState({
            [which]: value
        }, () => {

            const preItem = this.props.craefter.evaluateItem({
                wood: this.state.wood,
                metal: this.state.metal,
                cloth: this.state.cloth,
                diamond: this.state.diamond
            });

            this.setState({
                preItem
            })
        });
    }

    craeft() {

        const resources = {
            wood: this.state.wood,
            metal: this.state.metal,
            cloth: this.state.cloth,
            diamond: this.state.diamond
        };

        const item = this.props.craefter.craeft(resources);

        this.props.itemAdded(
            item,
            resources
        );
    }

    render() {
        return (
            <div className='rpgui-container framed craeft-window'>

                <div className={'row'}>
                    <strong>Cräft!</strong>
                    <hr/>
                </div>

                <div className={'row'}>
                    <div>
                        {this.state.wood} x Wood:
                        <Slider step={1} min={0} max={this.props.resources.wood}
                                defaultValue={this.state.wood}
                                onValueChange={(value) => this.updateResource('wood', value)}/>
                    </div>

                    <div>
                        {this.state.metal} x Metal:
                        <Slider step={1} min={0} max={this.props.resources.wood}
                                defaultValue={this.state.metal}
                                onValueChange={(value) => this.updateResource('metal', value)}/>
                    </div>

                    <div>
                        {this.state.cloth} x Cloth:
                        <Slider step={1} min={0} max={this.props.resources.wood}
                                defaultValue={this.state.cloth}
                                onValueChange={(value) => this.updateResource('cloth', value)}/>
                    </div>

                    <div>
                        {this.state.diamond} x Diamond:
                        <Slider step={1} min={0} max={this.props.resources.wood}
                                defaultValue={this.state.diamond}
                                onValueChange={(value) => this.updateResource('diamond', value)}/>
                    </div>
                </div>

                {
                    this.state.preItem ?
                        <div className='rpgui-container framed-grey item columns'>

                            <div className={'column row item-icon'}>

                                {
                                    this.state.preItem.category === ItemCategories.Weapon ?
                                        <span className="rpgui-icon sword"></span> : null
                                }

                                {
                                    this.state.preItem.category === ItemCategories.Armor ?
                                        <span className="icon">
                                            <i className="fas fa-shield-alt"></i>
                                        </span> : null
                                }

                            </div>

                            <div className={'column item-description'}>
                                <div className={'row'}>
                                    Type: {this.state.preItem.type}
                                </div>
                                <div className={'row'}>
                                    Atk: {this.state.preItem.atk} Matk: {this.state.preItem.matk}
                                </div>
                            </div>

                        </div> : null
                }

                <div className='row'>
                    <button onClick={this.craeft}
                            className='rpgui-button is-big'>
                        <span>Cräft!</span>
                    </button>
                </div>
            </div>
        );
    }
}
