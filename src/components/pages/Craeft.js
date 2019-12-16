/* globals craeft */
import React, {Component} from "react";

// game
import Player from "../player/Player"
import Boss from "../boss/Boss"
import Dead from "../player/Dead";
import Farm from "../Farm";
import Items from "../item/Items";
import CraefterList from "../craefter/CraefterList";

import Craeft from "@craeft/engine/src/craeft";
import config from "@craeft/engine/config"

export default class CraeftComponent extends Component {

    constructor(props) {
        super(props);

        this.addCraefter = this.addCraefter.bind(this);
        this.addItem = this.addItem.bind(this);

        this.equipItem = this.equipItem.bind(this);
        this.unEquipItem = this.unEquipItem.bind(this);

        this.disentchant = this.disentchant.bind(this);
        this.bury = this.bury.bind(this);

        window.onbeforeunload = () => {
            craeft.saveState();
        }
    }

    componentDidMount() {
        craeft.start({
            onTick: () => {
                // force update of the UI
                this.forceUpdate();
            }
        });
    }

    componentWillMount() {
        Craeft.loadState();
    }

    componentWillUnmount() {
        // stop, in the name of ...
        craeft.stop();

        Craeft.saveState();
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
        const result = craeft.disentchant(itemId);

        this.log(
            `"${result.name}" disenchanted! ${result.resources.sum()} resource(s) retrieved!`
        );

        this.forceUpdate()
    }

    bury(
        craefterId
    ) {
        const name = craeft.bury(craefterId);

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

                    <Player player={craeft.player}
                            onUnequip={this.unEquipItem}
                            logs={craeft.logs}/>

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

                    {
                        config.showBossScreen ?
                            <Boss/> : null
                    }

                </div>

            </div>
        );
    }
}
