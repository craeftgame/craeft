import React, {Component} from "react";
import Gauge from "../utility/Gauge";
import Attribute from "../utility/Attribute";
import PropTypes from "prop-types";
import Boss from "@craeft/engine/src/boss/boss"
import Fight from "./Fight";

export default class BossDescription extends Component {

    static propTypes = {
        boss: PropTypes.instanceOf(Boss),
        fight: PropTypes.func
    };

    state = {
        isFighting: false
    };

    constructor(props) {
        super(props);

        this.fight = this.fight.bind(this);
    }

    fight() {

        this.setState({
            isFighting: !this.state.isFighting
        });

        this.props.fight();
    }


    render() {
        return (
            <div className="rpgui-container framed-grey boss-info">

                <div className="columns">

                    <div className="column">
                        <span>
                            <strong> Level:</strong> {this.props.boss.level}
                        </span>
                        <hr/>
                    </div>

                    <div className="column">
                        <Gauge color="red" label="HP"
                               current={this.props.boss.hpCurrent}
                               max={this.props.boss.hpMax}/>
                    </div>

                </div>

                <div className="boss-parameters">

                    <div>
                        <Attribute label="Str" value={13}/>
                        <Attribute label="Vit" value={8}/>
                        <Attribute label="Int" value={1}/>
                        <Attribute label="Dex" value={34}/>
                    </div>

                    <div>
                        <Attribute label="ATk" value={40}/>
                        <Attribute label="Matk" value={3}/>
                        <Attribute label="Def" value={9}/>
                        <Attribute label="Mdef" value={7}/>
                    </div>

                </div>

                <div>

                    {
                        !this.state.isFighting ?
                            <button className='rpgui-button'
                                    onClick={this.fight}>
                                <span>Fight!</span>
                            </button>
                            :
                            <Fight boss={this.props.boss}/>
                    }

                </div>

            </div>
        )
    }
}