/* globals craeft */
import React, {Component} from "react";

// game
import Player from "../player/Player"
import Adventure from "../adventure/Adventure"
import Dead from "../player/Dead";
import Farm from "../Farm";
import Items from "../item/Items";
import CraefterList from "../craefter/CraefterList";

import Craeft from "@craeft/engine/src/craeft";

export default class CraeftComponent extends Component {

    state = {
        view: 1
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

        this.toggleView = this.toggleView.bind(this);

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
            }
        });
    }

    componentWillUnmount() {
        // stop, in the name of ...
        craeft.stop();

        Craeft.saveState();
    }

    toggleView(view) {

        this.setState({
            view
        })
    }

    move(direction) {

        craeft.move(direction);

        this.forceUpdate();
    }

    addCraefter(
        which
    ) {
        craeft.addCraefter(which);

        this.forceUpdate();
    }

    addItem(
        item,
        resourcesConsumed
    ) {
        craeft.addItem(
            item,
            resourcesConsumed
        );

        this.forceUpdate();
    }

    equipItem(
        item
    ) {
        const equipped = craeft.player.equipment.equip(item);

        if (equipped) {
            item.equipped = equipped;

            this.log(`"${item.getName()}" put on.`);
        } else {
            this.log("Equip failed!")
        }
    }

    unEquipItem(
        itemId
    ) {
        const unequipped = craeft.player.equipment.unequip(itemId);

        if (unequipped) {
            const item = craeft.items.find((i) => i.id === itemId);

            item.equipped = false;

            this.log(`"${item.getName()}" taken off.`);
        } else {
            this.log("Unequip failed!")
        }
    }

    disentchant(
        itemId
    ) {
        craeft.disentchant(itemId);

        this.forceUpdate()
    }

    bury(
        craefterId
    ) {
        const name = craeft.craefters.bury(craefterId);

        this.log(`Cräfter "${name}" was buried!`);

        this.forceUpdate()
    }

    log(
        entry
    ) {
        craeft.logs.push(entry);

        this.forceUpdate()
    }

    render() {
        return (
            <div className={"craeft"}>

                {
                    craeft.player.dead ?
                        <Dead/> : null
                }

                <div className={craeft.player.dead ? "rpgui-disabled" : ""}>

                    <div className="top-bar">
                        <button className={`rpgui-button golden first ${this.state.view === 1 ? "down" : ""}`}
                                onClick={() => this.toggleView(1)}>
                            <p>Cräfting</p>
                        </button>
                        <button className={`rpgui-button golden last ${this.state.view === 2 ? "down" : ""}`}
                                onClick={() => this.toggleView(2)}>
                            <p>Adventure</p>
                        </button>
                    </div>

                    {
                        this.state.view === 1 ?
                            <div>
                                <Player player={craeft.player}
                                        onUnequip={this.unEquipItem}/>

                                <div className="craefting-interface columns">

                                    <CraefterList resources={craeft.resources}
                                                  craefters={craeft.craefters}
                                                  craefterAdded={this.addCraefter}
                                                  bury={this.bury}
                                                  itemAdded={this.addItem}/>

                                    <Farm/>

                                    <Items items={craeft.items}
                                           onItemEquip={this.equipItem}
                                           onDisentchant={this.disentchant}/>

                                </div>
                            </div> : null
                    }

                    {
                        this.state.view === 2 ?
                            <Adventure onMove={this.move}/> : null
                    }

                </div>

            </div>
        );
    }
}
