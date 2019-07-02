import React, {Component} from "react";
import wf from "../../assets/images/wf.png"
import upc from "../../assets/images/upc.png"
import merchant from "../../assets/images/merchant.jpg"
import Donate from "../structure/Donate"

export default class About extends Component {

    render() {
        return (
            <div className="rpgui-container framed about">

                <div className="rpgui-container framed-grey">
                    <h3>About</h3>

                    <div className="rpgui-center">
                        Cräft is an open screen cräfting RPG that implements the CWEYW (Cräft What Ever You Want)
                        Engine.
                    </div>

                    <hr/>

                    <div className="rpgui-center">
                        Cräft! was made by Sebastian &quot;H34D&quot; Gerske
                    </div>

                    <hr/>

                    <div className="rpgui-center">
                        <a href="https://www.linkedin.com/in/sgerske/"
                           target="_linkedIn">
                            LinkedIn
                        </a>
                    </div>

                    <div className="rpgui-center">
                        <a href="https://twitter.com/sgerske"
                           target=")_twitter">
                            Twitter
                        </a>
                    </div>

                    <div className="rpgui-center">
                        <a href="https://github.com/h34d"
                           target="_github">
                            GitHub
                        </a>
                    </div>

                </div>

                <div className="rpgui-container framed-grey">
                    <h3>Donate</h3>

                    <div className="rpgui-center">
                        <Donate/>
                    </div>
                </div>

                <div className="rpgui-container framed-grey">
                    <h3>Inspiration</h3>

                    <div className="inspiration-item">
                        <a href="https://en.wikipedia.org/wiki/Warning_Forever"
                           target="_blank"
                           rel="noopener noreferrer">
                            Warning Forever
                        </a>

                        <div>
                            <img src={wf} alt="Warning Forever"
                                 style={{
                                     width: "230px"
                                 }}/>

                            <blockquote>
                                The main gameplay feature is the bosses change from stage to stage. Based on how a boss
                                is destroyed, the next boss will adapt itself to defend against previously used
                                strategies and force the player to change tactics. For example, if the front section of
                                one boss is destroyed the next boss will have increased armor in that area. If the
                                player&apos;s ship is hit by a certain kind of weapon, but still defeats the boss,
                                the next boss is likely to have more weapons of that type.
                            </blockquote>
                        </div>
                    </div>

                    <div className="inspiration-item">
                        <a href="https://en.wikipedia.org/wiki/Universal_Paperclips"
                           target="_blank"
                           rel="noopener noreferrer">
                            Universal Paperclips
                        </a>

                        <div>
                            <img src={upc} alt="Universal Paperclips"
                                 style={{
                                     width: "300px"
                                 }}/>

                            <blockquote>
                                The game begins with a single button that can be clicked to build a paperclip;
                                additional options open up throughout the game, all of which are accessed solely by
                                mouse. The user can quickly automate paperclip production, invest the profits in the
                                stock market, and invest the stock market profits into computer upgrades, all for the
                                sake of ultimately maximizing paperclip production. An activity log records the
                                user&apos;s accomplishments, and also gives the user some glimpses into the AI&apos;s
                                occasionally unsettling thoughts. The game ends if the player reaches 30.0
                                septendecillion paperclips, finishing the conversion of all matter in the universe
                                into paperclips.
                            </blockquote>

                        </div>
                    </div>

                    <div className="inspiration-item">
                        <a href="https://merchantrpg.fandom.com/wiki/Merchant_Wiki"
                           target="_blank"
                           rel="noopener noreferrer">
                            Merchant RPG
                        </a>

                        <div>
                            <img src={merchant} alt="Merchant RPG"
                                 style={{
                                     width: "365px",
                                 }}/>

                            <blockquote>
                                Blending together traditional RPG systems, tycoon mechanics, and a fantasy overworld,
                                Merchant aims to reimagine the traditional mobile RPG. In Merchant, players take the
                                role of a shopkeeper who must manage a team of Heroes and Crafters. Heroes are sent out
                                on quests in order to fight enemies and gather materials. Crafters then use those
                                materials to create weapons and armor. As the shopkeeper, players must balance their
                                micro-economies between selling items for gold and crafting items to better ensure
                                success for the Heroes. As the Merchant, you are the commander of your own domain!
                            </blockquote>

                        </div>
                    </div>

                    <div className="inspiration-item">

                        <a href="https://en.wikipedia.org/wiki/Minecraft"
                           target="_blank"
                           rel="noopener noreferrer">
                            Minecraft
                        </a>

                        <div>

                            <blockquote>
                                Players can craft a wide variety of items in Minecraft. Players can craft armor,
                                which can help mitigate damage from attacks, while weapons such as swords can be crafted
                                to kill enemies and other animals more easily. Players acquire resources to craft tools,
                                such as axes, shovels, or pickaxes, used to chop down trees, dig soil, and mine ores,
                                respectively; e.g. tools made of iron perform their tasks more quickly than tools made
                                of stone or wood and can be used more heavily before they break. Players can construct
                                furnaces which can smelt food, process ores and materials, among others.
                            </blockquote>

                        </div>
                    </div>
                </div>

                <div className="rpgui-container framed-grey">
                    <h3>Frameworks used</h3>

                    <div className="rpgui-center">
                        <a href="https://github.com/RonenNess/RPGUI"
                           target="_blank"
                           rel="noopener noreferrer">
                            RPG UI
                        </a>
                    </div>

                    <div className="rpgui-center">
                        <a href="https://github.com/FortAwesome/Font-Awesome"
                           target="_blank"
                           rel="noopener noreferrer">
                            Font Awesome
                        </a>
                    </div>

                    <div className="rpgui-center">
                        <a href="https://github.com/jgthms/bulma"
                           target="_blank"
                           rel="noopener noreferrer">
                            Bulma
                        </a>
                    </div>

                    <div className="rpgui-center">
                        <a href="https://github.com/facebook/react"
                           target="_blank"
                           rel="noopener noreferrer">
                            React
                        </a>
                    </div>

                    <div className="rpgui-center">
                        <a href="https://github.com/josdejong/mathjs"
                           target="_blank"
                           rel="noopener noreferrer">
                            MathJs
                        </a>
                    </div>

                </div>

            </div>
        )
    }
}