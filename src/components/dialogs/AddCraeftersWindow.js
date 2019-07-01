import React, {Component} from "react";
import Weaoponsmith from "../../engine/craefter/weaponsmith";
import Armorsmith from "../../engine/craefter/armorsmith";
import PropTypes from "prop-types";

export default class AddCraeftersWindow extends Component {

    static propTypes = {
        addCraefter: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.addWS = this.addWS.bind(this);
        this.addAS = this.addAS.bind(this);
    }

    addWS() {
        this.props.addCraefter(new Weaoponsmith())
    }

    addAS() {
        this.props.addCraefter(new Armorsmith())
    }


    render() {

        const style = {
            verticalAlign: "top",
            minWidth: "250px"
        };

        return (
            <div className='rpgui-container framed craefter-window'>

                <div className={"row"}>
                    <strong>Add Cräfter</strong>
                    <hr/>
                </div>

                <div className={"row"}>

                    <div>
                        <span className='rpgui-icon weapon-slot'/>
                        <button onClick={this.addWS}
                                className='rpgui-button is-huge'
                                style={style}>
                            <span>Weaponcräfter</span>
                        </button>
                    </div>

                    <div>
                        <span className='rpgui-icon armor-slot'/>
                        <button onClick={this.addAS}
                                className='rpgui-button is-big'
                                style={style}>
                            <span>Armorcräfter</span>
                        </button>
                    </div>

                    <div className='rpgui-disabled'>
                        <span className='rpgui-icon ring-slot'/>
                        <button className='rpgui-button is-big'
                                style={style}>
                            <span>Jewelcräfter</span>
                        </button>
                    </div>

                    <div className='rpgui-disabled'>
                        <span className='rpgui-icon potion-slot'/>
                        <button className='rpgui-button is-big'
                                style={style}>
                            <span>Alchemist</span>
                        </button>
                    </div>

                </div>

            </div>
        );
    }
}
