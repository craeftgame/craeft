/* globals craeft */
import React, { Component } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

// game
import Player from "../player/Player";
import Adventure from "../adventure/Adventure";
import Dead from "../player/Dead";
import Farm from "../Farm";
import Items from "../item/Items";
import CraefterList from "../craefter/CraefterList";

import Craeft from "@craeft/engine/dist/craeft";

export default class CraeftComponent extends Component {
    state = {
        view: 1,
    };

    constructor(props) {
        super(props);

        this.addCraefter = this.addCraefter.bind(this);
        this.addItem = this.addItem.bind(this);

        this.equipItem = this.equipItem.bind(this);
        this.unEquipItem = this.unEquipItem.bind(this);

        this.disentchant = this.disentchant.bind(this);
        this.bury = this.bury.bind(this);

        this.move = this.move.bind(this);
        this.startFarming = this.startFarming.bind(this);

        this.switchView = this.switchView.bind(this);

        window.onbeforeunload = () => {
            Craeft.saveState();
        };

        Craeft.loadState();
    }

    componentDidMount() {
        craeft.start({
            onTick: () => {
                // force update of the UI
                this.forceUpdate();
            },
        });
    }

    componentWillUnmount() {
        // stop, in the name of ...
        craeft.stop();

        Craeft.saveState();
    }

    startFarming() {
        craeft.startFarming({
            callback: () => {
                this.forceUpdate();
            },
        });

        this.forceUpdate();
    }

    switchView(view) {
        this.setState({
            view,
        });
    }

    move(direction) {
        craeft.move(direction);

        this.forceUpdate();
    }

    equipItem(itemId) {
        const equipped = craeft.equipItem(itemId);

        if (equipped) {
            this.forceUpdate();
        }
    }

    unEquipItem(itemId) {
        const uneqipped = craeft.unEquipItem(itemId);

        if (uneqipped) {
            this.forceUpdate();
        }
    }

    addCraefter(which) {
        craeft.addCraefter(which);

        this.forceUpdate();
    }

    addItem(item, resourcesConsumed) {
        craeft.addItem(item, resourcesConsumed);

        this.forceUpdate();
    }

    disentchant(itemId) {
        craeft.disentchant(itemId);

        this.forceUpdate();
    }

    bury(craefterId) {
        const name = craeft.craefters.bury(craefterId);

        craeft.logs.push(`Cräfter "${name}" was buried!`);

        this.forceUpdate();
    }

    render() {
        return (
            <div className={"craeft"}>
                {craeft.player.dead ? <Dead /> : null}

                <ReactTooltip
                    place="bottom"
                    className="rpgui-container framed is-size-5"
                >
                    Hey {craeft.player.name},<br />
                    you have to be level 10
                    <br />
                    to go on an adventure!
                </ReactTooltip>

                <div className={craeft.player.dead ? "rpgui-disabled" : ""}>
                    <div className="row">
                        <div className="rpgui-button golden top-bar">
                            <button
                                className={`rpgui-button golden ${this.state.view === 1 ? "down" : ""}`}
                                onClick={() => this.switchView(1)}
                            >
                                <span>Cräfting</span>
                            </button>

                            <div
                                className={`is-inline-block ${craeft.player.level < 10 ? "rpgui-disabled disabled" : ""}`}
                            >
                                <button
                                    className={`rpgui-button golden ${this.state.view === 2 ? "down" : ""}`}
                                    onClick={() =>
                                        craeft.player.level > 9
                                            ? this.switchView(2)
                                            : null
                                    }
                                    data-tip={
                                        craeft.player.level < 10
                                            ? "tooltip"
                                            : null
                                    }
                                >
                                    <span>Adventure</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {this.state.view === 1 ? (
                        <div>
                            <Player
                                player={craeft.player}
                                onUnequip={this.unEquipItem}
                            />

                            <div className="craefting-interface columns">
                                <CraefterList
                                    resources={craeft.resources}
                                    craefters={craeft.craefters}
                                    craefterAdded={this.addCraefter}
                                    bury={this.bury}
                                    itemAdded={this.addItem}
                                />

                                <Farm startFarming={this.startFarming} />

                                <Items
                                    items={craeft.items}
                                    onItemEquip={this.equipItem}
                                    onDisentchant={this.disentchant}
                                />
                            </div>
                        </div>
                    ) : null}

                    {this.state.view === 2 ? (
                        <Adventure onMove={this.move} />
                    ) : null}
                </div>
            </div>
        );
    }
}
