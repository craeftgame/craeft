import React, {Component} from 'react';
import Armor from './engine/items/armor';
import Weapon from './engine/items/weapon';
import Weaoponsmith from './engine/crafter/weaponsmith';
import Armorsmith from './engine/crafter/armorsmith';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            crafters: [],
            a: 0
        };

        this.addWS = this.addWS.bind(this);
        this.addAS = this.addAS.bind(this);
    }

    addWS() {
        console.log('ws', this.state.crafters);
        const crafters = [...this.state.crafters, new Weaoponsmith()];
        this.setState({
            crafters,
            a: crafters.length
        });
    }

    addAS() {
        console.log('as', this.state.crafters);
        const crafters = [...this.state.crafters, new Armorsmith()];
        this.setState({
            crafters,
            a: crafters.length
        });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <div>
                        Crafters:
                    </div>

                    <button onClick={this.addWS}>
                        add weapon smith
                    </button>

                    <button onClick={this.addAS}>
                        add armor smith
                    </button>

                    <div>
                        {
                            this.state.crafters.map((crafter, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            {crafter.type}: {crafter.name}
                                        </div>
                                        <div>
                                            {crafter.generateDescription()}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
