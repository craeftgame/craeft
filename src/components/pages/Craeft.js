import React, {Component} from "react";

import CraeftGame from "../../engine/craeft";

// game
import Player from "../player/Player"
import Dead from "../player/Dead";
import Farm from "../Farm";
import Items from "../item/Items";
import CraefterList from "../craefter/CraefterList";

export default class Craeft extends Component {

    constructor(props) {
        super(props);

        this.addCraefter = this.addCraefter.bind(this);
        this.addItem = this.addItem.bind(this);

        this.equipItem = this.equipItem.bind(this);
        this.unEquipItem = this.unEquipItem.bind(this);

        this.disentchant = this.disentchant.bind(this);
        this.bury = this.bury.bind(this);

        window.onbeforeunload = () => {
            CraeftGame.saveState();
        }
    }

    componentDidMount() {
        global.craeft.start({
            onTick: () => {
                // force update of the UI
                this.forceUpdate();
            }
        });
    }

    componentWillMount() {
        CraeftGame.loadState();
    }

    componentWillUnmount() {
        // stop, in the name of ...
        global.craeft.stop();

        CraeftGame.saveState();
    }

    addCraefter(
        which
    ) {
        global.craeft.addCraefter(which);

        this.forceUpdate();
    }

    addItem(
        item,
        resourcesConsumed
    ) {
        global.craeft.addItem(
            item,
            resourcesConsumed
        )

        this.forceUpdate();
    }

    equipItem(
        item
    ) {
        const equipped = global.craeft.player.equipment.equip(item);

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
        const unequipped = global.craeft.player.equipment.unequip(itemId);

        if (unequipped) {
            const item = global.craeft.items.find((i) => i.id === itemId);

            item.equipped = false;

            this.log(`"${item.getName()}" taken off.`);
        } else {
            this.log("Unequip failed!")
        }
    }

    disentchant(
        itemId
    ) {
        const result = global.craeft.disentchant(itemId);

        this.log(`"${result.name}" disenchanted! ${result.resources.sum()} resource(s) retrieved!`)

        this.forceUpdate()
    }

    bury(
        craefterId
    ) {
        const name = global.craeft.bury(craefterId);

        this.log(`Cräfter "${name}" was buried!`)

        this.forceUpdate()
    }

    log(
        entry
    ) {
        global.craeft.logs.push(entry);

        this.forceUpdate()
    }

    render() {
        return (
            <div className={"craeft"}>

                {
                    global.craeft.player.dead ?
                        <Dead/> : null
                }

                <div className={global.craeft.player.dead ? "rpgui-disabled" : ""}>

                    <Player player={global.craeft.player}
                            onUnequip={this.unEquipItem}
                            logs={global.craeft.logs}/>

                    <div className="craefting-interface columns">

                        <CraefterList resources={global.craeft.resources}
                                      craefters={global.craeft.craefters}
                                      craefterAdded={this.addCraefter}
                                      bury={this.bury}
                                      itemAdded={this.addItem}/>

                        <Farm craeft={global.craeft}/>

                        <Items items={global.craeft.items}
                               onItemEquip={this.equipItem}
                               onDisentchant={this.disentchant}/>

                    </div>

                </div>

            </div>
        );
    }
}
