import React, {Component} from "react";
import {CraefterTypes} from "../engine/craefter/types";
import Progress from "./Progress";

export default class CraefterDescription extends Component {

    render() {
        return (
            <div>
                <div>
                    {
                        this.props.craefter.type === CraefterTypes.Armorsmith ?
                            "Armorsmith" : "Weaponsmith"
                    }: {this.props.craefter.name}
                </div>
                <div>
                    {this.props.craefter.generateDescription()}
                </div>
                <div>
                    <Progress color='green'
                              filled={this.props.craefter.staPercent}/>
                </div>
            </div>
        )
    }
}