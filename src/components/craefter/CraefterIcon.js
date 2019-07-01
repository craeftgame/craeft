import React, {Component} from "react";
import PropTypes from "prop-types";
import {CraefterTypes} from "../../engine/data/types";

export default class CraefterIcon extends Component {

    static propTypes = {
        craefter: PropTypes.object,
        onCraefterSelect: PropTypes.func,
        isSelected: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.onCraefterSelect = this.onCraefterSelect.bind(this);
    }

    onCraefterSelect() {

        if (!this.props.craefter.delay.isDelaying) {
            this.props.onCraefterSelect(
                this.props.craefter
            );
        }
    }

    render() {

        const classes = [
            "craefter-icon"
        ];

        if (this.props.isSelected) {
            classes.push("craefter-icon-selected")
        }

        let disabled = "";
        if (this.props.craefter && this.props.craefter.isCraefting) {
            disabled = "rpgui-disabled"
        }

        return (
            <div className={classes.join(" ")}
                 disabled={this.props.craefter && this.props.craefter.isCraefting}
                 onClick={this.onCraefterSelect}>

                {
                    this.props.craefter.type === CraefterTypes.Weaponsmith ?
                        <div className={`rpgui-icon weapon-slot ${disabled}`}/> : null
                }

                {
                    this.props.craefter.type === CraefterTypes.Armorsmith ?
                        <div className={`rpgui-icon armor-slot ${disabled}`}/> : null
                }

                {
                    this.props.craefter.delay && !this.props.craefter.delay.isDelaying ?
                        <span className='craefter-level'>
                            {this.props.craefter.level}
                        </span> : null
                }

                {
                    this.props.craefter.delay && this.props.craefter.delay.isDelaying ?
                        <div className='craefter-timeout nowrap'>
                            <span>
                                {this.props.craefter.delay.timer.getTimeoutString()}
                            </span>
                        </div> : null
                }

                {
                    this.props.craefter && this.props.craefter.isCraefting ?
                        <div className='craefter-timeout nowrap'>
                            <span>
                                {1}
                            </span>
                        </div> : null
                }

            </div>
        )
    }
}