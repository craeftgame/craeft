import React, {Component} from 'react';
// game engine
import Player from './engine/player';
import Farm from "./engine/farm";

// visual components
// structure
import Footer from './components/structure/Footer';
import Header from "./components/structure/Header";

// game
import PlayerComponent from './components/Player'
import FarmComponent from "./components/Farm";
import ItemsComponent from "./components/Items";
import CraeftersComponent from "./components/Craefters";

const initialResources = 100;

export default class Craeft extends Component {

    state = {
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

        // re-render every second
        setInterval(() => {
            this.forceUpdate();
        }, 1 * 1000);

        this.farmComplete = this.farmComplete.bind(this);
        this.addCraefter = this.addCraefter.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    farmComplete(
        result
    ) {
        const resources = Object.assign({}, this.state.resources);

        resources.metal += result.metal;
        resources.wood += result.wood;
        resources.cloth += result.cloth;
        resources.diamond += result.diamond;

        this.setState({
            resources
        })
    }

    addCraefter(
        craefter
    ) {
        const craefters = [...this.state.craefters];

        craefters.push(craefter);

        this.setState({
            craefters
        })
    }

    addItem(
        item,
        resourcesConsumed
    ) {
        const items = [...this.state.items];
        const resources = Object.assign({}, this.state.resources);

        resources.wood -= resourcesConsumed.wood;
        resources.metal -= resourcesConsumed.metal;
        resources.cloth -= resourcesConsumed.cloth;
        resources.diamond -= resourcesConsumed.diamond;

        items.push(item);

        this.setState({
            items,
            resources
        })
    }

    render() {
        return (
            <div className="rpgui-content container craeft">

                <Header/>

                <PlayerComponent player={this.state.player}/>

                <div className={'craefting-interface columns'}>

                    <CraeftersComponent resources={this.state.resources}
                                        craefters={this.state.craefters}
                                        craefterAdded={this.addCraefter}
                                        itemAdded={this.addItem}/>

                    <FarmComponent resources={this.state.resources}
                                   farm={this.state.farm}
                                   farmComplete={this.farmComplete}/>

                    <ItemsComponent items={this.state.items}/>

                </div>

                <Footer/>

            </div>
        );
    }
}
