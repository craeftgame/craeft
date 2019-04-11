import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Farm extends Component {

    static propTypes = {
        player: PropTypes.object,
        resources: PropTypes.object,
        farm: PropTypes.object,
        farmComplete: PropTypes.func,
        farmStart: PropTypes.func
    };

    state = {
        isFarming: false
    };

    constructor(props) {
        super(props);

        this.farm = this.farm.bind(this)
    }

    farm() {
        if (!this.state.isFarming && this.props.player.staCurrent > 0) {

            this.setState({
                    isFarming: true
                },
                () => {
                    this.props.farmStart(1);
                    this.props.farm.farm((result) => {
                        this.props.farmComplete(result);
                        this.setState({
                            isFarming: false
                        })
                    });
                })
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

                        <div>
                            Wood: {this.props.resources.wood}
                        </div>
                        <div>
                            Metal: {this.props.resources.metal}
                        </div>
                        <div>
                            Cloth: {this.props.resources.cloth}
                        </div>
                        <div>
                            Diamond: {this.props.resources.diamond}
                        </div>

                    </div>

                    <div className={"row"}>
                        <button className='rpgui-button'
                                onClick={this.farm}
                                disabled={this.state.isFarming ||
                                this.props.player.staCurrent < 1 ||
                                this.props.player.dead}>

                            <span className="icon">
                                <i className="fas fa-tree"/>
                            </span>

                            <span>
                                &nbsp;
                                {
                                    this.state.isFarming ?
                                        this.props.farm.getTimeLeftInSeconds() : "Farm!"
                                }
                            </span>

                        </button>
                    </div>

                </div>

            </div>
        )
    }
}