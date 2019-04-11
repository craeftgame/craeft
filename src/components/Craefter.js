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

        if (this.props.craefter.dead) {
            classNames.push("rpgui-disabled")
        }

        return (
            <div
                className={classNames.join(" ")}>

                <CraefterDescription craefter={this.props.craefter}/>

                <div className={"row"}>
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
                                    this.props.craefter.delay.getTimeout() : "Cräft!"
                            }
                        </span>

                    </button>
                </div>

            </div>
        )
    }
}