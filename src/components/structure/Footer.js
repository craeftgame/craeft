import React, {Component} from "react";
import Donate from "./Donate"

export default class Footer extends Component {

    render() {
        return (
            <div className="row footer">

                <hr className="golden"/>

                <div className="columns">

                    <div className="column">
                        <Donate/>
                    </div>

                    <div className="column" style={{
                        textAlign: "left"
                    }}>
                        <a href={"#about"}>About Cräft!</a>
                    </div>

                </div>

                <div className="rpgui-center"
                     style={{
                         fontSize: "12px"
                     }}>
                    © 2019-2020 Sebastian Gerske — All Rights Reserved
                </div>

            </div>
        )
    }
}