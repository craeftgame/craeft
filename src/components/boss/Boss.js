import React, {Component} from "react";
import Gauge from "../utility/Gauge";

/**
 * Spider - Tsuchigumo
 * Dragon - Tatsu
 * Fish - Namazu
 */
export default class Boss extends Component {

    render() {
        return (
            <div className='boss frame'>
                <div className='rpgui-container framed'>

                    <div className="row">
                        <strong>Bosses:</strong>
                        <hr/>
                    </div>

                    <div className="row">
                        <div className="columns">

                            <div className="column">
                                <div className="rpgui-container framed-grey">

                                    <div className="boss-name">
                                        Tsuchigumo
                                    </div>

                                    <div className="boss-logo icon">
                                        <i className="fas fa-spider fa-10x"/>
                                    </div>

                                </div>
                            </div>

                            <div className="column" style={{width: "100%"}}>

                                <div>

                                    <div className="rpgui-container framed-grey boss-icon">
                                        <div className="boss-icon-wrap">
                                            <div className="icon">
                                                <i className="fas fa-fish fa-2x"/>
                                            </div>

                                            <div className="icon boss-dead">
                                                <i className="fas fa-skull"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rpgui-container framed-grey boss-icon">
                                        <div className="boss-icon-wrap icon-selected">
                                            <div className="icon">
                                                <i className="fas fa-spider fa-2x"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rpgui-container framed-grey boss-icon">
                                        <div className="boss-icon-wrap">
                                            <div className="icon">
                                                <i className="fas fa-dragon fa-2x"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rpgui-container framed-grey boss-icon">
                                        <div className="boss-icon-wrap">
                                            <div className="icon">
                                                <i className="fas fa-question fa-2x"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rpgui-container framed-grey boss-icon">
                                        <div className="boss-icon-wrap">
                                            <div className="icon">
                                                <i className="fas fa-question fa-2x"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rpgui-container framed-grey boss-icon">
                                        <div className="boss-icon-wrap">
                                            <div className="icon">
                                                <i className="fas fa-question fa-2x"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr/>

                                <div>
                                    <Gauge color="red" label="HP"
                                           current={100} max={100}/>
                                </div>

                                <hr/>

                                <div className="boss-parameters">
                                    <span>Str: 5 </span>
                                    <span>Vit: 2 </span>
                                    <span>Int: 4 </span>
                                    <span>Dex: 0 </span>
                                </div>

                                <div>
                                    <button className='rpgui-button'>
                                        <span>Fight!</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}