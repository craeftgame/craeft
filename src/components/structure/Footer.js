import React, {Component} from "react";
import Donate from "./Donate"
import PropTypes from "prop-types";

export default class Footer extends Component {

    static propTypes = {
        showFooter: PropTypes.bool.isRequired
    };

    render() {
        return (
            <div className="row footer">

                <hr className="golden"/>

                {
                    this.props.showFooter ?
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
                        : null
                }

                <div className="rpgui-center"
                     style={{
                         fontSize: "12px"
                     }}>
                    © 2019-2020 Umlaut Games — All Rights Reserved
                </div>

            </div>
        )
    }
}