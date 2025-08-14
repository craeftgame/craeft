import React, { Component } from "react";
import PropTypes from "prop-types";
import Attribute from "../utility/Attribute";
import PreItem from "@craeft/engine/src/items/PreItem";

export default class PreItemStats extends Component {
    static propTypes = {
        item: PropTypes.instanceOf(PreItem),
    };

    render() {
        return (
            <div className="row">
                {this.props.item.atk ? (
                    <div className="is-inline nowrap">
                        <Attribute
                            label="Atk"
                            value={this.props.item.atk}
                            value2={this.props.item.atkMax}
                        />
                    </div>
                ) : null}

                {this.props.item.matk ? (
                    <div className="is-inline nowrap">
                        <Attribute
                            label="Matk"
                            value={this.props.item.matk}
                            value2={this.props.item.matkMax}
                        />
                    </div>
                ) : null}

                {this.props.item.def ? (
                    <div className="is-inline nowrap">
                        <Attribute
                            label="Def"
                            value={this.props.item.def}
                            value2={this.props.item.defMax}
                        />
                    </div>
                ) : null}

                {this.props.item.mdef ? (
                    <div className="is-inline nowrap">
                        <Attribute
                            label="Mdef"
                            value={this.props.item.mdef}
                            value2={this.props.item.mdefMax}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}
