import React, {Component} from "react";
import Gauge from "./Gauge";
import {CraefterTypeNames} from "../engine/data/names";
import PropTypes from "prop-types";

export default class CraefterDescription extends Component {

    static propTypes = {
        craefter: PropTypes.object,
    };

    render() {
        return (
            <div>

                <div>
                    {
                        CraefterTypeNames[this.props.craefter.type]
                    }
                </div>

                {
                    !this.props.craefter.delay.isDelaying ?
                        <div>
                            Level {this.props.craefter.level}: {this.props.craefter.name}
                        </div>
                        : "???"
                }

                {
                    !this.props.craefter.delay.isDelaying ?
                        <div>

                            <div className='row'>

                                <div>
                                    <span className='nowrap'>Str: {this.props.craefter.str} </span>
                                    <span className='nowrap'>Dex: {this.props.craefter.dex} </span>
                                </div>

                                <div>
                                    <span className='nowrap'>Int: {this.props.craefter.int} </span>
                                    <span className='nowrap'>Luk: {this.props.craefter.luk} </span>
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