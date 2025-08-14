/* globals craeft */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Map extends Component {
    static propTypes = {
        onMove: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.keyPressed = this.keyPressed.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyPressed);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPressed);
    }

    keyPressed(event) {
        switch (event.key) {
            case "ArrowDown":
            case "s":
            case "S":
                this.props.onMove("down");
                event.preventDefault();
                break;

            case "ArrowUp":
            case "w":
            case "W":
                this.props.onMove("up");
                event.preventDefault();
                break;

            case "ArrowRight":
            case "d":
            case "D":
                this.props.onMove("right");
                event.preventDefault();
                break;

            case "ArrowLeft":
            case "a":
            case "A":
                this.props.onMove("left");
                event.preventDefault();
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <div className="rpgui-container framed-grey">
                <div className="rpgui-center nowrap map-wrap">
                    {craeft.map.getViewport().map((row, ri) => {
                        return (
                            <div
                                key={`map-row-${ri}`}
                                className="map-row nowrap"
                            >
                                {row.map((cell, ci) => {
                                    return (
                                        <div
                                            key={`cell-${ri}-${ci}`}
                                            className={`map-cell terrain-${cell.terrain}`}
                                        >
                                            {cell.playerIsHere ? (
                                                <div
                                                    className={`map-player-marker ${craeft.map.location.facing === "left" ? "ltr" : ""}`}
                                                />
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}

                    <div className="control">
                        <div
                            className="controls left"
                            onClick={() => this.props.onMove("left")}
                        >
                            <div className="icon">
                                <i className="rpgui-cursor-point fas fa-caret-left fa-2x" />
                            </div>
                        </div>
                        <div
                            className="controls up"
                            onClick={() => this.props.onMove("up")}
                        >
                            <div className="icon">
                                <i className="rpgui-cursor-point fas fa-caret-up fa-2x" />
                            </div>
                        </div>
                        <div
                            className="controls right"
                            onClick={() => this.props.onMove("right")}
                        >
                            <div className="icon">
                                <i className="rpgui-cursor-point fas fa-caret-right fa-2x" />
                            </div>
                        </div>
                        <div
                            className="controls down"
                            onClick={() => this.props.onMove("down")}
                        >
                            <div className="icon">
                                <i className="rpgui-cursor-point fas fa-caret-down fa-2x" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
