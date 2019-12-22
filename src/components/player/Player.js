import React, {Component} from "react";
import Gauge from "../utility/Gauge";
import Equipment from "./Equipment";
import PropTypes from "prop-types";
import Attribute from "../utility/Attribute";

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
                                <Attribute label={this.props.player.class}
                                           value={this.props.player.name}/>
                            </div>

                            <div>
                                <Attribute label="Str" value={this.props.player.str}/>
                                <Attribute label="Vit" value={this.props.player.vit}/>
                                <Attribute label="Int" value={this.props.player.int}/>
                                <Attribute label="Dex" value={this.props.player.dex}/>
                            </div>

                            <div>
                                <Attribute label="Atk" value={this.props.player.atk()}/>
                                <Attribute label="Matk" value={this.props.player.matk()}/>
                                <Attribute label="Def" value={this.props.player.def()}/>
                                <Attribute label="Mdef" value={this.props.player.mdef()}/>
                            </div>

                        </div>

                        <hr/>

                        <div className='row columns'>

                            <div className='column'>

                                <Attribute label="Level" value={this.props.player.level}/>

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