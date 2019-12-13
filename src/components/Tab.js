import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button'

class Tab extends Component {

    constructor(props){
        super(props);
        this.state = {
            temperature: 25,
        }
    }

    componentDidMount() {
        this.timer = setInterval(()=> this.changeTemperature(), 1000);
    }

    componentWillMount() {
        clearInterval(this.timer)
        this.timer = null;
    }

    changeTemperature = () => {
        fetch("http://localhost:8585")
            .then(result => result.json())
            .then(result =>  this.setState({temperature: result.temperature}))
    }

    render() {
        return (
            <div className="tab">
                Temperature Sensor {this.state.temperature}C
                {/* <Button variant="dark" onClick={this.handleRefreshButton}>Refresh</Button> */}
            </div>
        
        );
    }
}

export default Tab;