import React, {Component} from "react";
import Donate from "./Donate"

export default class Footer extends Component {

    render() {
        return (
            <div className="row footer">

                <hr className="golden"/>

                <div className="columns">

                    <div className="column" style={{
                        textAlign: "right"
                    }}>
                        <Donate/>
                    </div>

                    <div className="column" style={{
                        textAlign: "left"
                    }}>
                        <a href={"#about"}>About Cräft!</a>
                    </div>

                </div>

            </div>
        )
    }
}