import React, { Component } from "react";
import PropTypes from "prop-types";
import Attribute from "../utility/Attribute";
import Item from "@craeft/engine/src/items/item";

export default class ItemStats extends Component {
    static propTypes = {
        item: PropTypes.instanceOf(Item),
    };

    render() {
        return (
            <div className="row">
                {this.props.item.atk ? (
                    <div className="is-inline nowrap">
                        <Attribute label="Atk" value={this.props.item.atk()} />
                    </div>
                ) : null}

                {this.props.item.matk ? (
                    <div className="is-inline nowrap">
                        <Attribute
                            label="Matk"
                            value={this.props.item.matk()}
                        />
                    </div>
                ) : null}

                {this.props.item.def ? (
                    <div className="is-inline nowrap">
                        <Attribute label="Def" value={this.props.item.def()} />
                    </div>
                ) : null}

                {this.props.item.mdef ? (
                    <div className="is-inline nowrap">
                        <Attribute
                            label="Mdef"
                            value={this.props.item.mdef()}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}
