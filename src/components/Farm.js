import React, {Component} from "react";
import PropTypes from "prop-types";
import {ResourceTypes} from "../engine/data/types";

export default class Farm extends Component {

    static propTypes = {
        craeft: PropTypes.object
    };

    state = {
        isFarming: false
    };

    constructor(props) {
        super(props);

        this.startFarming = this.startFarming.bind(this)
    }

    startFarming() {
        if (!this.state.isFarming && this.props.craeft.player.staCurrent > 0) {
            this.props.craeft.startFarming({
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
                                {this.props.craeft.resources[ResourceTypes.Wood]}
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                Metal:
                            </div>
                            <div className="column rtl">
                                {this.props.craeft.resources[ResourceTypes.Metal]}
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                Cloth:
                            </div>
                            <div className="column rtl">
                                {this.props.craeft.resources[ResourceTypes.Cloth]}
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                Diamond:
                            </div>
                            <div className="column rtl">
                                {this.props.craeft.resources[ResourceTypes.Diamond]}
                            </div>
                        </div>

                    </div>

                    <div className={"row"}>
                        <button className='rpgui-button'
                                onClick={this.startFarming}
                                disabled={
                                    this.state.isFarming ||
                                    this.props.craeft.player.staCurrent < 1 ||
                                    this.props.craeft.player.dead
                                }>

                            <span className="icon">
                                <i className="fas fa-tree"/>
                            </span>

                            <span>
                                &nbsp;
                                {
                                    this.state.isFarming ?
                                        this.props.craeft.farm.timer.getTimeoutString() : "Farm!"
                                }
                            </span>

                        </button>
                    </div>

                </div>

            </div>
        )
    }
}