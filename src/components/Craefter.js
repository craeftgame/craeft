import React, {Component} from "react";
import CraefterDescription from "./CraefterDescription";

export default class Craefter extends Component {

    render() {
        return (
            <div className='rpgui-container framed-grey craefter'>

                <CraefterDescription craefter={this.props.craefter}/>

                <div className={'row'}>
                    <button onClick={() => this.props.openCraeftDialog(this.props.craefter)}
                            className='rpgui-button'
                            disabled={!this.props.canCraeft || this.props.craefter.isCreating}>

                        <span className="icon">
                            <i className="fas fa-hammer"></i>
                        </span>

                        <span>
                            &nbsp;
                            {
                                this.props.craefter.isCreating ?
                                    this.props.craefter.getCreationTimeout() : 'Cräft!'
                            }
                        </span>

                    </button>
                </div>

            </div>
        )
    }
}