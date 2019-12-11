/* globals craeft */
import React, {Component} from "react";
import {ResourceTypes} from "@craeft/engine/src/data/types";

export default class Farm extends Component {

    state = {
        isFarming: false
    };

    constructor(props) {
        super(props);

        this.startFarming = this.startFarming.bind(this)
    }

    startFarming() {
        if (!this.state.isFarming && craeft.player.staCurrent > 0) {
            craeft.startFarming({
                callback: () => {

                    this.setState({
                        isFarming: false
                    })
                }
            });

            this.setState({
                isFarming: true
            });
        }
    }

    render() {
        return (
            <div className='farm column frame'>
                <div className='rpgui-container framed'>

                    <div className={"row"}>
                        <strong>Resources:</strong>
                        <hr/>
                    </div>

                    <div className='rpgui-container framed-grey resources'>

                        <div className="columns">
                            <div className="column">
                                Wood:
                            </div>
                            <div className="column rtl">
                                {craeft.resources[ResourceTypes.Wood].toLocaleString()}&nbsp;
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                Metal:
                            </div>
                            <div className="column rtl">
                                {craeft.resources[ResourceTypes.Metal].toLocaleString()}&nbsp;
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                Cloth:
                            </div>
                            <div className="column rtl">
                                {craeft.resources[ResourceTypes.Cloth].toLocaleString()}&nbsp;
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                Diamond:
                            </div>
                            <div className="column rtl">
                                {craeft.resources[ResourceTypes.Diamond].toLocaleString()}&nbsp;
                            </div>
                        </div>

                    </div>

                    <div className={"row"}>
                        <button className='rpgui-button'
                                onClick={this.startFarming}
                                disabled={
                                    this.state.isFarming ||
                                    craeft.player.staCurrent < 1 ||
                                    craeft.player.dead
                                }>

                            <span className="icon">
                                <i className="fas fa-tree"/>
                            </span>

                            <span>
                                &nbsp;
                                {
                                    this.state.isFarming ?
                                        craeft.farm.timer.getTimeoutString() : "Farm!"
                                }
                            </span>

                        </button>
                    </div>

                </div>

            </div>
        )
    }
}