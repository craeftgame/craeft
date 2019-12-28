import React, {Component} from "react";
import PropTypes from "prop-types";

import CraeftingWindow from "../dialogs/CraeftingWindow";
import CraefterIcon from "./CraefterIcon";
import AddCraeftersWindow from "../dialogs/AddCraeftersWindow";
import Craefter from "./Craefter";
import {ResourceTypes} from "@craeft/engine/src/data/types";
import Modal from "../utility/Modal";

export default class CraefterList extends Component {

    static propTypes = {
        craefters: PropTypes.array,
        resources: PropTypes.object,
        itemAdded: PropTypes.func,
        craefterAdded: PropTypes.func,
        bury: PropTypes.func
    };

    state = {
        // is the craft dialog showing?
        isCraeftingDialogShown: false,
        // is the add craefter dialog showing?
        isAddCraefterDialogShown: false,
        // currently selected craefter
        selectedCraefter: null
    };

    constructor(props) {
        super(props);

        this.openCraeftDialog = this.openCraeftDialog.bind(this);
        this.openCraefterDialog = this.openCraefterDialog.bind(this);

        this.addCraefter = this.addCraefter.bind(this);
        this.addItem = this.addItem.bind(this);

        this.hasEnoughResources = this.hasEnoughResources.bind(this);

        this.onCraefterSelect = this.onCraefterSelect.bind(this);
        this.bury = this.bury.bind(this);
    }

    hasEnoughResources() {
        return (
            this.props.resources[ResourceTypes.Wood] > 0 ||
            this.props.resources[ResourceTypes.Metal] > 0 ||
            this.props.resources[ResourceTypes.Cloth] > 0 ||
            this.props.resources[ResourceTypes.Diamond] > 0
        );
    }

    openCraefterDialog() {
        this.setState({
            isAddCraefterDialogShown: true
        })
    }

    openCraeftDialog(craefter) {

        this.setState({
            isCraeftingDialogShown: true,
            selectedCraefter: craefter
        });
    }

    addCraefter(
        craefter
    ) {
        this.props.craefterAdded(craefter);
        this.setState({
            isAddCraefterDialogShown: false
        })
    }

    addItem(
        item,
        resourcesConsumed
    ) {
        this.props.itemAdded(
            item,
            resourcesConsumed,
            this.state.selectedCraefter
        );

        this.setState({
            isCraeftingDialogShown: false,
            selectedCraefter: null
        })
    }

    onCraefterSelect(
        craefter
    ) {
        let c = this.state.selectedCraefter === craefter ? null : craefter;

        if (craefter.isCraefting) {
            c = null;
        }

        this.setState({
            selectedCraefter: c
        })
    }

    bury(
        craefterId
    ) {
        this.props.bury(craefterId);

        this.setState({
            selectedCraefter: null
        })
    }

    render() {
        return (
            <div className='craefters column frame'>

                <div className='rpgui-container framed'>

                    {
                        this.state.isCraeftingDialogShown ?
                            <Modal isActive={this.state.isCraeftingDialogShown}
                                   onClose={() => this.setState({
                                       isCraeftingDialogShown: false
                                   })}>
                                <CraeftingWindow resources={this.props.resources}
                                                 craefter={this.state.selectedCraefter}
                                                 itemAdded={this.addItem}/>
                            </Modal> : null
                    }

                    {
                        this.state.isAddCraefterDialogShown ?
                            <Modal isActive={this.state.isAddCraefterDialogShown}
                                   onClose={() => this.setState({
                                       isAddCraefterDialogShown: false
                                   })}>
                                <AddCraeftersWindow addCraefter={this.addCraefter}/>
                            </Modal> : null
                    }

                    <div className={"row"}>
                        <strong>Cräfter</strong>
                        <hr/>
                    </div>

                    {
                        this.state.selectedCraefter && !this.state.selectedCraefter.isCraefting ?
                            <Craefter craefter={this.state.selectedCraefter}
                                      openCraeftDialog={this.openCraeftDialog}
                                      bury={this.bury}
                                      canCraeft={this.hasEnoughResources()}/>
                            : null
                    }

                    {
                        this.props.craefters.map((craefter, index) => {
                            return (
                                <CraefterIcon key={index} craefter={craefter}
                                              isSelected={
                                                  this.state.selectedCraefter === craefter &&
                                                  !this.state.selectedCraefter.isCraefting
                                              }
                                              onCraefterSelect={this.onCraefterSelect}/>
                            )
                        })
                    }

                    <div className={"row"}>
                        <button onClick={this.openCraefterDialog}
                                className='rpgui-button is-small'>

                            <span className="icon">
                                <i className="fas fa-plus"/>
                            </span>

                            <span>
                                &nbsp;Add Cräfter
                            </span>

                        </button>
                    </div>

                </div>
            </div>
        )
    }
}