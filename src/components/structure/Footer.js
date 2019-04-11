import React, {Component} from "react";

export default class Footer extends Component {

    render() {
        return (
            <div className={"columns footer"}>
                <div className={"column"}>
                    donate
                </div>
                <div className={"column"}>
                    <a href={"#about"}>more info</a>
                </div>
            </div>
        )
    }
}