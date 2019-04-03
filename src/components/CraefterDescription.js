import React, {Component} from "react";
import {CraefterTypes} from "../engine/craefter/types";
import Gauge from "./Gauge";

export default class CraefterDescription extends Component {

    render() {
        return (
            <div>

                <div>
                    {
                        this.props.craefter.type === CraefterTypes.Armorsmith ?
                            "Armorsmith" : "Weaponsmith"
                    }: {!this.props.craefter.isCreating ? this.props.craefter.name : '???'}
                </div>

                {
                    !this.props.craefter.isCreating ?
                        <div>

                            <div className='row'>
                                <div>
                                    <span>Str: {this.props.craefter.str} </span>
                                    <span>Dex: {this.props.craefter.dex} </span>
                                </div>
                                <div>
                                    <span>Int: {this.props.craefter.int} </span>
                                    <span>Luk: {this.props.craefter.luk} </span>
                                </div>
                            </div>

                            <hr/>

                            <Gauge label='STA' color='green'
                                   current={this.props.craefter.staCurrent}
                                   max={this.props.craefter.staMax}/>

                            <hr/>

                        </div>
                        : null
                }

            </div>
        )
    }
}