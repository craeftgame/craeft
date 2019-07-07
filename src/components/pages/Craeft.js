import React, {Component} from "react";

// game
import CraeftGame from "../../engine/craeft"
import Player from "../player/Player"
import Farm from "../Farm";
import Items from "../item/Items";
import CraefterList from "../craefter/CraefterList";
import config from "../../engine/config"

// storage
import ls from "local-storage";
import zip from "lz-string/libs/lz-string";
import ArrayHelper from "../../tools/array";

export default class Craeft extends Component {

    state = {
        craeft: new CraeftGame()
    };

    constructor(props) {
        super(props);

        this.addCraefter = this.addCraefter.bind(this);
        this.addItem = this.addItem.bind(this);

        this.equipItem = this.equipItem.bind(this);
        this.unEquipItem = this.unEquipItem.bind(this);

        this.saveState = this.saveState.bind(this);

        window.onbeforeunload = () => {
            this.saveState();
        }
    }

    saveState() {
        if (config.useLocalStorage) {
            const state = this.state.craeft.serialize();

            ls.set(
                "state",
                config.compressLocalStorage ?
                    zip.compress(state) : state
            );
        }
    }

    loadState() {

        let state = null;

        if (config.useLocalStorage) {

            const localState = ls.get("state");

            if (localState) {
                // if the state starts with { it is uncompressed
                state = localState.startsWith("{") ?
                    localState : zip.decompress(localState)
            }
        }

        return state;
    }

    componentDidMount() {
        this.state.craeft.start({
            onTick: () => {

                // force update of the UI
                this.forceUpdate();
            }
        });
    }

    componentWillMount() {
        const json = this.loadState();

        if (json) {
            this.setState({
                craeft: CraeftGame.deserialize(json)
            });
        }
    }

    componentWillUnmount() {
        // stop, in the name of ...
        this.state.craeft.stop();

        this.saveState();
    }

    addCraefter(
        which
    ) {
        this.state.craeft.addCraefter(which);

        this.forceUpdate();
    }

    addItem(
        item,
        resourcesConsumed
    ) {
        this.state.craeft.resources
            .sub(resourcesConsumed);

        item.onDoneCreating = (
            craefterId,
            exp
        ) => {

            const craefter = ArrayHelper.findById(
                this.state.craeft.craefters,
                craefterId
            );

            craefter.finishCraefting(
                exp
            );

            this.log(`${item.name} cräfted by ${craefter.name}! `);
        };

        this.state.craeft.items.push(item);

        this.forceUpdate();
    }

    equipItem(
        item
    ) {
        const equiped = this.state.craeft.player.equipment.equip(item);

        if (equiped) {
            item.equiped = equiped;

            this.log(`${item.name} put on.`);
        } else {
            this.log("Equip failed!")
        }
    }

    unEquipItem(
        itemId
    ) {

        const unequiped = this.state.craeft.player.equipment.unequip(itemId);

        if (unequiped) {
            const item = this.state.craeft.items.find((i) => i.id === itemId);

            item.equiped = false;

            this.log(`${item.name} taken off.`);
        } else {
            this.log("Unequip failed!")
        }
    }

    log(
        entry
    ) {
        this.state.craeft.logs.push(entry);

        this.forceUpdate()
    }

    render() {
        return (
            <div className={`craeft${this.state.craeft.player.dead ? "rpgui-disabled" : ""}`}>

                <Player player={this.state.craeft.player}
                        onUnequip={this.unEquipItem}
                        logs={this.state.craeft.logs}/>

                <div className="craefting-interface columns">

                    <CraefterList resources={this.state.craeft.resources}
                                  craefters={this.state.craeft.craefters}
                                  craefterAdded={this.addCraefter}
                                  itemAdded={this.addItem}/>

                    <Farm craeft={this.state.craeft}/>

                    <Items items={this.state.craeft.items}
                           onItemEquip={this.equipItem}/>

                </div>

            </div>
        );
    }
}
