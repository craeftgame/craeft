import React, {Component} from "react";
import PropTypes from "prop-types";
import {
    CraefterTypes
} from "../../engine/data/types";

export default class AddCraeftersWindow extends Component {

    static propTypes = {
        addCraefter: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.addWC = this.addWC.bind(this);
        this.addAC = this.addAC.bind(this);
    }

    addWC() {
        this.props.addCraefter(CraefterTypes.WeaponCraefter)
    }

    addAC() {
        this.props.addCraefter(CraefterTypes.ArmorCraefter)
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
                        <button onClick={this.addWC}
                                className='rpgui-button is-huge'
                                style={style}>
                            <span>Weaponcräfter</span>
                        </button>
                    </div>

                    <div>
                        <span className='rpgui-icon armor-slot'/>
                        <button onClick={this.addAC}
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
