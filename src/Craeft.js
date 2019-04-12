import React, {Component} from "react";
// game engine
import Player from "./engine/player";
import Farm from "./engine/farm";

// visual components
// structure
import Footer from "./components/structure/Footer";
import Header from "./components/structure/Header";

// game
import PlayerComponent from "./components/Player"
import FarmComponent from "./components/Farm";
import ItemsComponent from "./components/Items";
import CraeftersComponent from "./components/Craefters";
import Weapon from "./engine/items/weapon";

const initialResources = 100;
global.delay = 0.1;

export default class Craeft extends Component {

    gameTick = null;

    state = {
        logs: [
            `Welcome to Cräft! version: ${global.version}`
        ],
        // the player
        player: new Player(),
        // the farm
        farm: new Farm(10),
        // craefters
        craefters: [],
        // items
        items: [],
        // resources
        resources: {
            wood: initialResources,
            metal: initialResources,
            cloth: initialResources,
            diamond: initialResources
        }
    };

    constructor(props) {
        super(props);

        this.farmComplete = this.farmComplete.bind(this);
        this.farmStart = this.farmStart.bind(this);

        this.addCraefter = this.addCraefter.bind(this);
        this.addItem = this.addItem.bind(this);

        this.equipItem = this.equipItem.bind(this);
        this.unEquipItem = this.unEquipItem.bind(this);

        const knife = new Weapon({
            atk: 1,
            matk: 1,
            delay: -1
        });

        this.state.player.equip(knife);

        knife.equiped = true;

        this.state.items = [
            knife
        ];
    }

    componentDidMount() {
        // re-render every second
        this.gameTick = setInterval(() => {
            // tick the player
            this.state.player.tick();

            // tick all craefters
            for (const craefter of this.state.craefters) {
                craefter.tick();
            }

            // todo: tick the items

            // force update of the UI
            this.forceUpdate();
        }, 1 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.gameTick)
    }

    farmStart(
        sta
    ) {
        this.state.player.exhaust(sta)
    }

    farmComplete(
        result
    ) {
        const resources = Object.assign({}, this.state.resources);

        resources.metal += result.metal;
        resources.wood += result.wood;
        resources.cloth += result.cloth;
        resources.diamond += result.diamond;

        this.state.player.damage(10);
        this.state.player.addExp(10);

        this.setState({
            resources
        })
    }

    addCraefter(
        craefter
    ) {
        const craefters = [...this.state.craefters];

        craefters.push(craefter);

        craefter.onDoneCreating = () => {
            this.state.player.addExp(5);
        };

        this.setState({
            craefters
        })
    }

    addItem(
        item,
        resourcesConsumed,
        craefter
    ) {
        const items = [...this.state.items];
        const resources = Object.assign({}, this.state.resources);

        resources.wood -= resourcesConsumed.wood;
        resources.metal -= resourcesConsumed.metal;
        resources.cloth -= resourcesConsumed.cloth;
        resources.diamond -= resourcesConsumed.diamond;

        item.onDoneCreating = () => {
            craefter.addExp(5);
        };

        items.push(item);

        this.setState({
            items,
            resources
        })
    }

    equipItem(
        item
    ) {
        const equiped = this.state.player.equip(item);

        if (equiped) {
            this.log("Item has been put on");

            item.equiped = equiped;

            let items = [...this.state.items];

            this.setState({
                items
            })
        } else {
            this.log("Equip failed!")
        }
    }

    unEquipItem(
        item
    ) {
        const unequiped = this.state.player.unequip(item);

        if (unequiped) {

            this.log("Item has been put off");

            let items = [...this.state.items];
            items[items.indexOf(item)].equiped = false;

            this.setState({
                items
            })
        } else {
            this.log("Unequip failed!")
        }
    }

    log(
        entry
    ) {
        const logs = [...this.state.logs];

        logs.push(entry);

        this.setState({
            logs
        })
    }

    render() {
        return (
            <div className={`rpgui-content container craeft ${this.state.player.dead ? "rpgui-disabled" : ""}`}>

                <Header/>

                <PlayerComponent player={this.state.player}
                                 onUnequip={this.unEquipItem}
                                 logs={this.state.logs}/>

                <div className={"craefting-interface columns"}>

                    <CraeftersComponent resources={this.state.resources}
                                        craefters={this.state.craefters}
                                        craefterAdded={this.addCraefter}
                                        itemAdded={this.addItem}/>

                    <FarmComponent resources={this.state.resources}
                                   farm={this.state.farm}
                                   player={this.state.player}
                                   farmStart={this.farmStart}
                                   farmComplete={this.farmComplete}/>

                    <ItemsComponent items={this.state.items}
                                    onItemEquip={this.equipItem}/>

                </div>

                <Footer/>

            </div>
        );
    }
}
