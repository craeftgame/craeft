import React, {Component} from "react";
import Gauge from "../utility/Gauge";
import {CraefterTypeNames} from "@craeft/engine/src/data/names";
import PropTypes from "prop-types";
import Attribute from "../utility/Attribute";

export default class CraefterDescription extends Component {

    static propTypes = {
        craefter: PropTypes.object,
    };

    render() {
        return (
            <div>

                <div>
                    <span>{CraefterTypeNames[this.props.craefter.type]}</span>
                </div>

                {
                    !this.props.craefter.delay.isDelaying ?
                        <div>
                            Level {this.props.craefter.level}: <span>{this.props.craefter.name}</span>
                        </div>
                        : "???"
                }

                {
                    !this.props.craefter.delay.isDelaying ?
                        <div>

                            <div className='row'>

                                <div>
                                    <Attribute label="Str" value={this.props.craefter.str}/>
                                    <Attribute label="Dex" value={this.props.craefter.dex}/>
                                </div>

                                <div>
                                    <Attribute label="Int" value={this.props.craefter.int}/>
                                    <Attribute label="Luk" value={this.props.craefter.luk}/>
                                </div>

                            </div>

                            <hr/>

                            <div className='row'>

                                <Gauge label='STA' color='green'
                                       current={this.props.craefter.staCurrent}
                                       max={this.props.craefter.staMax}/>


                                <Gauge label='EXP'
                                       current={this.props.craefter.expCurrent}
                                       max={this.props.craefter.expMax}/>

                            </div>

                            <hr/>

                        </div>
                        : null
                }

            </div>
        )
    }
}