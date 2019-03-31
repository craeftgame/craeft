import React, {Component} from 'react';

export default class Player extends Component {

    render() {
        return (
            <div className={'player row'}>
                <div className='rpgui-container framed-grey column'>
                    <div>
                        <strong>Name:</strong> {this.props.player.name}
                    </div>
                    <div>
                            <span>
                                <strong> Level:</strong> {this.props.player.level}
                            </span>
                        <span>
                                <strong> Experience:</strong> {this.props.player.exp}
                            </span>
                    </div>
                </div>
            </div>
        )
    }
}