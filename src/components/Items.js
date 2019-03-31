import React, {Component} from "react";

export default class Items extends Component {
    render() {
        return (
            <div className='items column frame'>
                <div className='rpgui-container framed'>

                    <div className={'row'}>
                        <strong>Items:</strong>
                        <hr/>
                    </div>

                    <div className='item-list'>
                        {
                            this.props.items.length > 0 ?
                                this.props.items.map((item, index) => {
                                    return (
                                        <div key={index} className='rpgui-container framed-grey item'>
                                            {
                                                item.getIsCreating() ? `${item.getCreationTimeout()} ???` :
                                                    <div>
                                                        <div>
                                                            {item.name}
                                                        </div>
                                                        <div>
                                                            xxxxxx
                                                        </div>
                                                        <div>
                                                            {item.generateDescription()}
                                                        </div>
                                                        <div>
                                                            xxxxxx
                                                        </div>
                                                        <button className='rpgui-button'>
                                                            <span>Disentchant</span>
                                                        </button>
                                                    </div>
                                            }
                                        </div>
                                    )
                                }) : <div className='row'>go Cräft!</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}