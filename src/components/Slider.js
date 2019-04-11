import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Farm extends Component {

    static propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        defaultValue: PropTypes.number,
        onValueChange: PropTypes.func
    };

    state = {
        value: 0,
        mouseDown: false
    };

    constructor(props) {
        super(props);

        this.state.value = this.props.defaultValue || 0;

        this.element = React.createRef();
        this.track = React.createRef();

        // pretty edgy
        this.leftEdge = React.createRef();
        this.rightEdge = React.createRef();

        this.setValue = this.setValue.bind(this);
        this.move = this.move.bind(this);
        this.slideTo = this.slideTo.bind(this);
    }

    setValue(value) {
        this.setState({
            value
        });

        this.props.onValueChange(value)
    }

    slideTo(pos) {
        const value = this.props.min + Math.round(
            (pos / this.track.current.offsetWidth) * (this.props.max - this.props.min)
        ) - 1;
        this.setValue(value);
    }

    move(pos) {
        if (this.state.mouseDown) {
            this.slideTo(pos)
        }
    }

    componentDidMount() {
        window.addEventListener(
            "mouseup",
            () => this.setState({mouseDown: false}), false
        );
    }

    render() {
        const edgeWidth = !this.leftEdge.current ? 1 : this.leftEdge.current.offsetWidth;
        const trackWith = !this.track.current ? 1 : this.track.current.offsetWidth;

        const step = trackWith / (this.props.max - this.props.min);
        const relative_val = Math.round(parseFloat(this.state.value) - this.props.min);
        const left = (Math.floor(edgeWidth * 0.20) + (relative_val * step)) + "px";

        return (
            <div ref={this.element}>

                <input type='range' style={{display: "none"}}
                       min={this.props.min} max={this.props.max} step={this.props.step}
                       value={this.state.value}
                       onChange={(event) => this.setValue(event.target.value)}/>

                <div className='rpgui-slider-container'>

                    <div className='rpgui-slider-track'
                         ref={this.track}
                         onMouseMove={(e) => this.move(e.nativeEvent.offsetX || e.nativeEvent.layerX)}
                         onMouseDown={() => this.setState({mouseDown: true})}
                         onMouseUp={() => this.setState({mouseDown: false})}
                         onClick={(e) => this.slideTo(e.nativeEvent.offsetX || e.nativeEvent.layerX)}>
                    </div>

                    <div className='rpgui-slider-left-edge'
                         ref={this.leftEdge}
                         onMouseDown={() => this.setState({mouseDown: true})}
                         onClick={() => this.setValue(this.props.min)}>
                    </div>

                    <div className='rpgui-slider-right-edge'
                         ref={this.rightEdge}
                         onMouseDown={() => this.setState({mouseDown: true})}
                         onClick={() => this.setValue(this.props.max)}>
                    </div>

                    <div className='rpgui-slider-thumb'
                         onMouseDown={() => this.setState({mouseDown: true})}
                         style={{
                             left
                         }}>
                    </div>

                </div>
            </div>
        )
    }
}
