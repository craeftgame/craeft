import React, {Component} from "react";

export default class Dead extends Component {
    render() {
        return (
            <div className={"dead"}>

                <div>
                    <span className={"you-are-dead"}>You are dead!</span>
                </div>

                <br/>

                <div>
                    <button className={"rpgui-button is-big"}
                            onClick={() => window.location.reload(true)}>
                        <span>Play again!</span>
                    </button>
                </div>

            </div>
        )
    }
}