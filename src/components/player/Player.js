import React, {Component} from "react";
import Gauge from "../utility/Gauge";
import Equipment from "./Equipment";
import PropTypes from "prop-types";

export default class Player extends Component {

    static propTypes = {
        player: PropTypes.object,
        onUnequip: PropTypes.func,
        logs: PropTypes.array
    };

    render() {
        return (
            <div className={"rpgui-container framed-grey player row"}>
                <div className='columns'>

                    <div className='column'>

                        <div className='row'>

                            <div>
                                <strong>{this.props.player.class}:</strong> {this.props.player.name}
                            </div>

                            <div>
                                <span>Str: {this.props.player.str} </span>
                                <span>Vit: {this.props.player.vit} </span>
                                <span>Int: {this.props.player.int} </span>
                                <span>Dex: {this.props.player.dex} </span>
                                <span>Luk: {this.props.player.luk} </span>
                            </div>

                            <div>
                                <span>Atk: {this.props.player.atk()} </span>
                                <span>Matk: {this.props.player.matk()} </span>
                                <span>Def: {this.props.player.def()} </span>
                                <span>Mdef: {this.props.player.mdef()} </span>
                            </div>

                        </div>

                        <hr/>

                        <div className='row columns'>

                            <div className='column'>

                                <span>
                                    <strong> Level:</strong> {this.props.player.level}
                                </span>

                                <hr/>

                                <Gauge label='EXP' max={this.props.player.expMax}
                                       current={this.props.player.expCurrent}/>

                            </div>

                            <div className='column'>

                                <Gauge label='HP' color='red'
                                       max={this.props.player.hpMax}
                                       current={this.props.player.hpCurrent}/>

                                <Gauge label='STA' color='green'
                                       max={this.props.player.staMax}
                                       current={this.props.player.staCurrent}/>

                            </div>

                        </div>

                        <div className='rpgui-container framed-grey logs'>
                            {
                                this.props.logs.slice(-4).map((log, index) => {
                                    return (
                                        <div key={index}>
                                            {log}
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className='column'>
                        <Equipment equipment={this.props.player.equipment}
                                   onUnequip={this.props.onUnequip}/>
                    </div>

                </div>
            </div>
        )
    }
}