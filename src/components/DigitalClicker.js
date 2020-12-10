import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    increment = () => {
        let newTimesClicked = this.state.timesClicked + 1
        this.setState({
            timesClicked: newTimesClicked
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>{this.state.timesClicked}</button>
            </div>
        )
    }
}