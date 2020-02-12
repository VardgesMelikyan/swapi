import React, { Component } from 'react'
import './ErrorBoundery.css'
import icon from './death-star.png';

export default class ErrorBoundery extends Component {
    state = {
        error: false,
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    render() {
        if (this.state.error) {
            return <ErrorIndicator />
        }
        return this.props.children
    }
}
const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
  </span>
            <span>
                (but we already sent droids to fix it)
  </span>
        </div>
    );
}