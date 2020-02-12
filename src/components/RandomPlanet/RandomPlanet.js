import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Loading from '../Loading';
import PlanetView from './View/PlanetView';
import ErrorBoundery from '../Alerts/ErrorBoundery';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true
    }
    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3500)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
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
        const { planet, loading } = this.state;

        const hasData = !(loading)
        const spinner = loading ? <Loading /> : null
        const content = hasData ? <PlanetView planet={planet} /> : null
        return (
            <ErrorBoundery>
                <div className="random-planet jumbotron rounded" >
                    {spinner}
                    {content}
                </div>
            </ErrorBoundery>
        );
    }
}
