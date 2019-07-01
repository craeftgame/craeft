import React, {Component} from "react";

export default class Footer extends Component {

    render() {
        return (
            <div className="row footer">

                <hr className="golden"/>

                <div className="columns">

                    <div className="column" style={{
                        textAlign: "right"
                    }}>

                        <div>
                            Donations:
                        </div>

                        <div>
                            BTC:&nbsp;
                            <a href='https://www.blockchain.com/de/btc/address/1h34d1soZWQGxmtYYqDZ8TAYmfChEFfBh'
                               target='_blank' rel="noopener noreferrer">
                                1h34d1soZWQGxmtYYqDZ8TAYmfChEFfBh
                            </a>
                        </div>

                        <div>
                            ETH:&nbsp;
                            <a href='https://etherscan.io/address/0x456a1B12dB9cBD1e59716a208D0Db3FeA44A2d63'
                               target='_blank' rel="noopener noreferrer">
                                0x456a1B12dB9cBD1e59716a208D0Db3FeA44A2d63
                            </a>
                        </div>

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