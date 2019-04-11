import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ItemStats extends Component {
    static propTypes = {
        item: PropTypes.object
    };

    render() {
        return (
            <div className='row'>

                {
                    this.props.item.atk ?
                        <span className='nowrap'>
                            Atk: {this.props.item.atk}
                            {
                                this.props.item.atkMax ?
                                    <span>- {this.props.item.atkMax}</span> : null
                            }
                            &nbsp;
                        </span> : null
                }

                {
                    this.props.item.matk ?
                        <span className='nowrap'>
                            Matk: {this.props.item.matk}
                            {
                                this.props.item.matkMax ?
                                    <span>- {this.props.item.matkMax}</span> : null
                            }
                            &nbsp;
                        </span> : null
                }

                {
                    this.props.item.def ?
                        <span className='nowrap'>
                            Def: {this.props.item.def}
                            {
                                this.props.item.defMax ?
                                    <span>- {this.props.item.defMax}</span> : null
                            }
                            &nbsp;
                        </span> : null
                }

                {
                    this.props.item.mdef ?
                        <span className='nowrap'>
                            Mdef: {this.props.item.mdef}
                            {
                                this.props.item.mdefMax ?
                                    <span>- {this.props.item.mdefMax}</span> : null
                            }
                            &nbsp;
                        </span> : null
                }

            </div>
        )
    }
}