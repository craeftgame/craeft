import React, {Component} from "react";
import PropTypes from "prop-types";

import CraeftWindow from "./CraeftWindow";
import CraefterWindow from "./CraefterWindow";
import Craefter from "./Craefter";

export default class Craefters extends Component {

    static propTypes = {
        craefters: PropTypes.array,
        resources: PropTypes.object,
        itemAdded: PropTypes.func,
        craefterAdded: PropTypes.func
    };

    state = {
        // is the craft dialog showing?
        isCraefting: false,
        // is the add craefter dialog showing?
        isAddingCraefter: false,
        // currently selected craefter
        currentCraefter: null,
    };

    constructor(props) {
        super(props);

        this.openCraeftDialog = this.openCraeftDialog.bind(this);
        this.openCraefterDialog = this.openCraefterDialog.bind(this);

        this.addCraefter = this.addCraefter.bind(this);
        this.addItem = this.addItem.bind(this);

        this.hasEnoughResources = this.hasEnoughResources.bind(this);
    }

    hasEnoughResources() {
        return (
            this.props.resources.wood > 0 ||
            this.props.resources.metal > 0 ||
            this.props.resources.cloth > 0 ||
            this.props.resources.diamond > 0
        );
    }

    openCraefterDialog() {
        this.setState({
            isAddingCraefter: true
        })
    }

    openCraeftDialog(craefter) {

        this.setState({
            isCraefting: true,
            currentCraefter: craefter
        });
    }

    addCraefter(craefter) {
        this.props.craefterAdded(craefter);
        this.setState({
            isAddingCraefter: false
        })
    }

    addItem(
        item,
        resourcesConsumed
    ) {
        this.props.itemAdded(
            item,
            resourcesConsumed,
            this.state.currentCraefter
        );

        this.setState({
            isCraefting: false
        })
    }

    render() {
        return (
            <div className='craefters column frame'>
                <div className='rpgui-container framed'>

                    {
                        this.state.isCraefting ?
                            <div className={`modal ${this.state.isCraefting ? "is-active" : ""}`}>
                                <div className="modal-background"/>
                                <div className="modal-content">

                                    {
                                        this.state.isCraefting ?
                                            <CraeftWindow resources={this.props.resources}
                                                          craefter={this.state.currentCraefter}
                                                          itemAdded={this.addItem}/> : null
                                    }

                                </div>
                                <button className="modal-close is-large"
                                        onClick={() => this.setState({
                                            isCraefting: false
                                        })}
                                        aria-label="close">
                                </button>
                            </div> : null
                    }

                    {
                        this.state.isAddingCraefter ?
                            <div className={`modal ${this.state.isAddingCraefter ? "is-active" : ""}`}>
                                <div className="modal-background"></div>
                                <div className="modal-content">
                                    <CraefterWindow addCraefter={this.addCraefter}/>
                                </div>
                                <button className="modal-close is-large"
                                        onClick={() => this.setState({
                                            isAddingCraefter: false
                                        })}
                                        aria-label="close">
                                </button>
                            </div> : null
                    }

                    <div className={"row"}>
                        <strong>Cräfters:</strong>
                        <hr/>
                    </div>

                    <div className={"row"}>
                        <button onClick={this.openCraefterDialog}
                                className='rpgui-button is-small'>
                                <span className="icon">
                                    <i className="fas fa-plus"></i>
                                </span>
                            <span>
                                &nbsp;Add Cräfter
                            </span>
                        </button>
                    </div>

                    <div className='craefters-list'>
                        {
                            this.props.craefters.map((craefter, index) => {
                                return (
                                    <Craefter key={index} craefter={craefter}
                                              openCraeftDialog={this.openCraeftDialog}
                                              canCraeft={this.hasEnoughResources()}/>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        )
    }
}