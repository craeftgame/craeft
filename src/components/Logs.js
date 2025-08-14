/* globals craeft */
import React, { Component } from "react";

export default class Logs extends Component {
    render() {
        return (
            <div className="rpgui-container framed-grey logs">
                {craeft.logs.slice(-4).map((log, index) => {
                    return <div key={index}>{log}</div>;
                })}
            </div>
        );
    }
}
