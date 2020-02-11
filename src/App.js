import React, { Component } from 'react';
import Header from './components/Header';
import RandomPlanet from './components/RandomPlanet';
import PeoplePage from './components/PeoplePage';
import PersonDetails from './components/PersonDetails';
import ItemList from './components/ItemList';
import ErrorIndicator from './components/Alerts/ErrorIndicator';
import SwapiService from './services/SwapiService'
import './App.css';
import './customBootstrap/bootstrap.min.css'
export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    error: false,
    selectedPerson: 1
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render() {
    const { error } = this.setState
    if (error) {
      return <ErrorIndicator />
    }
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;
    console.log(this.swapiService.getAllPlanets
    return (
      <div>
        <Header />
        {planet}
        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
        </div>
        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
};
