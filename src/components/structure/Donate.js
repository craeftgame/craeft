import React, {Component} from "react";

export default class Donate extends Component {
    render() {
        return (
            <div>

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
        )
    }
}