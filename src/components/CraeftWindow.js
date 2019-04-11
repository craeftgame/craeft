import React, {Component} from "react";
import PropTypes from "prop-types";

import Slider from "./Slider";
import CraefterDescription from "./CraefterDescription";
import PreItemDescription from "./PreItemDescription";

export default class CraeftWindow extends Component {

    static propTypes = {
        craefter: PropTypes.object,
        itemAdded: PropTypes.func,
        resources: PropTypes.object
    };

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
            <div>
                <div className='rpgui-container framed craeft-window'>

                    <div className={"row"}>
                        <strong>Cräft!</strong>
                        <hr/>
                    </div>

                    <CraefterDescription craefter={this.props.craefter}/>

                    <div className={"row"}>

                        {
                            this.props.resources.wood > 0 ?
                                <div>
                                    {this.state.wood} x Wood:
                                    <Slider step={1} min={0} max={this.props.resources.wood}
                                            defaultValue={this.state.wood}
                                            onValueChange={(value) => this.updateResource("wood", value)}/>
                                </div> : null
                        }

                        {
                            this.props.resources.metal > 0 ?
                                <div>
                                    {this.state.metal} x Metal:
                                    <Slider step={1} min={0} max={this.props.resources.metal}
                                            defaultValue={this.state.metal}
                                            onValueChange={(value) => this.updateResource("metal", value)}/>
                                </div> : null
                        }

                        {
                            this.props.resources.cloth > 0 ?
                                <div>
                                    {this.state.cloth} x Cloth:
                                    <Slider step={1} min={0} max={this.props.resources.cloth}
                                            defaultValue={this.state.cloth}
                                            onValueChange={(value) => this.updateResource("cloth", value)}/>
                                </div> : null
                        }

                        {
                            this.props.resources.diamond > 0 ?
                                <div>
                                    {this.state.diamond} x Diamond:
                                    <Slider step={1} min={0} max={this.props.resources.diamond}
                                            defaultValue={this.state.diamond}
                                            onValueChange={(value) => this.updateResource("diamond", value)}/>
                                </div> : null
                        }

                    </div>

                    {
                        this.state.preItem ?
                            <PreItemDescription preItem={this.state.preItem}/>
                            : null
                    }

                    <div className='row'>
                        <button onClick={this.craeft}
                                className='rpgui-button is-big'>
                            <span>Cräft!</span>
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}
