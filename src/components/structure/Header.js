import React, { Component } from "react";
import config from "@craeft/engine/dist/config";

export default class Header extends Component {
    render() {
        return (
            <div className={"row craeft-logo"}>
                <a href="#craeft">
                    Cräft!
                    {config.subLogo ? (
                        <div className={"craeft-sub-logo"}>
                            {config.subLogo}
                        </div>
                    ) : null}
                </a>

                <hr className="golden" />
            </div>
        );
    }
}
