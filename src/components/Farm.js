import React, {Component} from "react";

export default class Farm extends Component {

    state = {
        isFarming: false
    };

    constructor(props) {
        super(props);

        this.farm = this.farm.bind(this)
    }

    farm() {
        if (!this.state.isFarming) {
            this.setState({
                    isFarming: true
                }, () =>
                    this.props.farm.farm((result) => {
                        this.props.farmComplete(result);
                        this.setState({
                            isFarming: false
                        })
                    })
            );
        }
    }

    render() {
        return (
            <div className='farm column frame'>
                <div className='rpgui-container framed'>

                    <div className={'row'}>
                        <strong>Resources:</strong>
                        <hr/>
                    </div>

                    <div className='rpgui-container framed-grey resources'>

                        <div>
                            Wood: {this.props.resources.wood}
                        </div>
                        <div>
                            Metal: {this.props.resources.metal}
                        </div>
                        <div>
                            Cloth: {this.props.resources.cloth}
                        </div>
                        <div>
                            Diamond: {this.props.resources.diamond}
                        </div>

                    </div>

                    <div className={'row'}>
                        <button onClick={this.farm}
                                className='rpgui-button'
                                disabled={this.state.isFarming}>

                            <span className="icon">
                                <i className="fas fa-tree"></i>
                            </span>

                            <span>
                                &nbsp;
                                {
                                    this.state.isFarming ?
                                        this.props.farm.gettimeLeftInSeconds() : 'Farm!'
                                }
                            </span>

                        </button>
                    </div>

                </div>

            </div>
        )
    }
}