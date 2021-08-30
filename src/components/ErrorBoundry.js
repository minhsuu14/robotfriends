import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasErr: false
        }
    }
    componentDidCatch(error,info){
        this.setState({hasErr : true});
    }
    render() {
        if(this.state.hasErr){
            return <h1>That has err;</h1>;
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;