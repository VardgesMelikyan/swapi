import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Loading from '../Loading';
import PlanetView from './View/PlanetView';
import ErrorIndicator from '../Alerts/ErrorIndicator';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false
    }
    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3500)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }
    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error)
        const errorIndicator = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Loading /> : null
        const content = hasData ? <PlanetView planet={planet} /> : null
        return (
            <div className="random-planet jumbotron rounded" >
                {errorIndicator}
                {spinner}
                {content}
            </div>

        );
    }
}
