import React, { Component } from 'react';

class Tab extends Component {

    constructor(props){
        super(props);
        this.state = {
            temperature: "22C"
        }
    }

    render() {
        return (
            <div className="tab">Temperature Sensor {this.state.temperature}</div>
        );
    }
}

export default Tab;