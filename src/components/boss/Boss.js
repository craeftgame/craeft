/* globals craeft */
import React, {Component} from "react";
import BossLogo from "./BossLogo";
import BossIcon from "./BossIcon";
import BossDescription from "./BossDesctiption"

/**
 * Spider - Tsuchigumo
 * Dragon - Tatsu
 * Fish - Namazu
 */
export default class BossComponent extends Component {

    state = {
        selected: craeft.bosses[0]
    };

    render() {
        return (
            <div className='boss frame'>
                <div className='rpgui-container framed'>

                    <div className="row">
                        <strong>Bosses</strong>
                        <hr/>
                    </div>

                    <div className="row">
                        <div className="columns">

                            <BossLogo name={this.state.selected.name}
                                      type="spider"/>

                            <div className="column" style={{width: "100%"}}>

                                <div>

                                    <BossIcon dead={true} type="fish"/>

                                    <BossIcon type="spider" selected={true}/>

                                    <BossIcon type="dragon"/>

                                    {
                                        craeft.bosses.map((boss) => {

                                            return <BossIcon key={`boss-${boss.name}`}
                                                             type={boss.type}/>
                                        })
                                    }

                                </div>

                                <BossDescription boss={this.state.selected}/>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}