import React, {Component} from 'react';
import Weaoponsmith from "../engine/craefter/weaponsmith";
import Armorsmith from "../engine/craefter/armorsmith";
import Jewelcraefter from "../engine/craefter/jewelcraefter";

export default class CraefterWindow extends Component {

    constructor(props) {
        super(props);

        this.addWS = this.addWS.bind(this);
        this.addAS = this.addAS.bind(this);
        this.addJC = this.addJC.bind(this);
    }

    addWS() {
        this.props.addCraefter(new Weaoponsmith())
    }

    addAS() {
        this.props.addCraefter(new Armorsmith())
    }

    addJC() {
        this.props.addCraefter(new Jewelcraefter())
    }

    render() {
        return (
            <div className='rpgui-container framed craefter-window'>
                <div className={'row'}>
                    <strong>Add Cräfter</strong>
                    <hr/>
                </div>
                <div className={'row'}>
                    <div>
                        <button onClick={this.addWS}
                                className='rpgui-button is-huge'>
                            <span>
                                Weaponsmith
                            </span>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.addAS}
                                className='rpgui-button is-big'>
                            <span>
                                Armorsmith
                            </span>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.addJC}
                                className='rpgui-button is-big'>
                            <span>
                                Jewelcräfter
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
