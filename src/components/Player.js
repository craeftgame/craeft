import React, {Component} from 'react';
import Gauge from "./Gauge";

export default class Player extends Component {

    render() {
        return (
            <div className={'rpgui-container framed-grey player row'}>

                <div className='columns'>
                    <div className='column'>
                        <div>
                            <strong>Name:</strong> {this.props.player.name}
                        </div>
                        <div>
                            <span>Str: {this.props.player.str} </span>
                            <span>Dex: {this.props.player.dex} </span>
                            <span>Int: {this.props.player.int} </span>
                            <span>Luk: {this.props.player.luk} </span>
                        </div>
                        <div>
                            <span>Atk: </span>
                            <span>Matk: </span>
                            <span>Def: </span>
                            <span>Mdef: </span>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='columns'>
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
                    </div>
                </div>
            </div>
        )
    }
}