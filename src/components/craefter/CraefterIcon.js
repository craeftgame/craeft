/* globals craeft */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {CraefterTypes} from "@craeft/engine/src/data/types";

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
            "craefter-icon",
            "rpgui-cursor-point"
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
                    this.props.craefter.type === CraefterTypes.WeaponCraefter ?
                        <div className={`rpgui-icon weapon-slot ${disabled}`}/> : null
                }

                {
                    this.props.craefter.type === CraefterTypes.ArmorCraefter ?
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
                                {
                                    craeft.items.findById(this.props.craefter.itemId).delay.timer.getTimeoutString()
                                }
                            </span>
                        </div> : null
                }

                {
                    this.props.craefter.dead && !this.props.craefter.isCraefting ?
                        <div className='craefter-dead'>
                            <span className="icon">
                                <i className="fas fa-skull"/>
                            </span>
                        </div> : null
                }

            </div>
        )
    }
}