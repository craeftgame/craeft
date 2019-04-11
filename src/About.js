import React, {Component} from "react";
import Header from "./components/structure/Header";

export default class About extends Component {

    render() {
        return (
            <div className='rpgui-content container'>
                <Header/>

                <div>
                    <a href='#craeft'>back</a>
                    https://en.wikipedia.org/wiki/Warning_Forever
                    https://en.wikipedia.org/wiki/Universal_Paperclips
                    https://merchantrpg.fandom.com/wiki/Merchant_Wiki
                    https://en.wikipedia.org/wiki/Minecraft
                    https://en.wikipedia.org/wiki/CryptoKitties
                </div>
            </div>
        )
    }
}
