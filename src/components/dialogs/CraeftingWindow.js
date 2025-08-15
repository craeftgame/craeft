import React, { Component } from "react";
import PropTypes from "prop-types";

import Slider from "../utility/Slider";
import CraefterDescription from "../craefter/CraefterDescription";
import PreItemDescription from "../item/PreItemDescription";
import Resources from "@craeft/engine/dist/resources";
import Craefter from "@craeft/engine/dist/craefter/craefter";

export default class CraeftingWindow extends Component {
    static propTypes = {
        craefter: PropTypes.instanceOf(Craefter),
        resources: PropTypes.instanceOf(Resources),
        itemAdded: PropTypes.func,
    };

    state = {
        resources: new Resources({
            initialResources: 0,
        }),
        preItem: null,
    };

    constructor(props) {
        super(props);

        this.updateResource = this.updateResource.bind(this);
        this.craeft = this.craeft.bind(this);
    }

    updateResource(which, value) {
        this.setState(
            (prevState) => {
                // load current resources
                const resources = new Resources().add(prevState.resources);

                // update resources
                resources[which] = value;
                return {
                    resources,
                };
            },
            () => {
                // re evaluate the item
                this.setState((prevState) => ({
                    preItem: this.props.craefter.evaluateItem({
                        resources: prevState.resources,
                    }),
                }));
            },
        );
    }

    craeft() {
        if (this.state.resources.sum() > 0) {
            // cräft the item
            const item = this.props.craefter.craeft({
                resources: this.state.resources,
            });

            this.props.itemAdded(item, this.state.resources);
        }
    }

    render() {
        return (
            <div className="rpgui-container framed craeft-window">
                <div className={"row"}>
                    <strong>Cräft!</strong>
                    <hr />
                </div>

                <CraefterDescription craefter={this.props.craefter} />

                <div className={"row"}>
                    {this.props.resources.map((type, name, i) => {
                        return this.props.resources[type] ? (
                            <div key={`resource-slider-${i}`}>
                                <span>
                                    {this.state.resources[
                                        type
                                    ].toLocaleString()}
                                </span>{" "}
                                x {name}
                                <Slider
                                    step={1}
                                    min={0}
                                    max={this.props.resources[type]}
                                    defaultValue={this.state.resources[type]}
                                    onValueChange={(value) =>
                                        this.updateResource(type, value)
                                    }
                                />
                            </div>
                        ) : null;
                    })}
                </div>

                {this.state.preItem ? (
                    <PreItemDescription preItem={this.state.preItem} />
                ) : null}

                <div className="row">
                    <button
                        onClick={this.craeft}
                        className={`rpgui-button is-big ${this.state.resources.sum() < 1 ? "rpgui-disabled" : ""}`}
                    >
                        <span>Cräft!</span>
                    </button>
                </div>
            </div>
        );
    }
}
