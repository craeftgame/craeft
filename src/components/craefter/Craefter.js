import React, {Component} from "react";
import CraefterDescription from "./CraefterDescription";
import PropTypes from "prop-types";

export default class Craefter extends Component {

    static propTypes = {
        craefter: PropTypes.object,
        openCraeftDialog: PropTypes.func,
        canCraeft: PropTypes.bool
    };

    render() {

        const classNames = [
            "rpgui-container",
            "framed-grey",
            "craefter",
            "row"
        ];

        return (
            <div className={classNames.join(" ")}>
                <div className={this.props.craefter.dead ? "rpgui-disabled" : ""}>

                    <CraefterDescription craefter={this.props.craefter}/>

                    <div className={"row"}>

                        {
                            !this.props.craefter.dead ?
                                <button onClick={() => this.props.openCraeftDialog(this.props.craefter)}
                                        className='rpgui-button'
                                        disabled={
                                            !this.props.canCraeft ||
                                            this.props.craefter.delay.isDelaying ||
                                            this.props.craefter.dead
                                        }>

                                    <span className="icon">
                                        <i className="fas fa-hammer"/>
                                    </span>

                                    <span>
                                        &nbsp;
                                        {
                                            this.props.craefter.delay.isDelaying ?
                                                this.props.craefter.delay.timer.getTimeoutString() : "Cräft!"
                                        }
                                    </span>

                                </button> : null
                        }

                    </div>

                </div>

                {
                    this.props.craefter.dead ?
                        <button className='rpgui-button'>

                            <span className="icon">
                                <i className="fas fa-skull-crossbones"/>
                            </span>

                            <span>
                                &nbsp;Bury!
                            </span>

                        </button> : null
                }

            </div>
        )
    }
}