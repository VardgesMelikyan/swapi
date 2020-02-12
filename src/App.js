import React, { Component } from 'react';
import Header from './components/Header';
import RandomPlanet from './components/RandomPlanet';
import PeoplePage from './components/PeoplePage';
import ItemDetails from './components/ItemDetails';
import ItemList from './components/ItemList';
// import PlanetPage from './components/PlanetPage';
import ErrorBoundery from './components/Alerts/ErrorBoundery';
import SwapiService from './services/SwapiService'
import Row from './components/Row'
import './App.css';
import './customBootstrap/bootstrap.min.css'
import { RESOURCE } from 'webpack/lib/ModuleFilenameHelpers';
export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    // selectedPerson: 2
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService
    const personDetails = (<ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage} />)
    const starshipDetails = (<ItemDetails itemId={5} getData={getStarship} getImageUrl={getStarshipImage} />)
    return (
      <ErrorBoundery>
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
          <Row left={personDetails} right={starshipDetails} />
          {/* <PeoplePage getData={this.swapiService.getAllPeaple} /> */}
          {/* <PlanetPage getData={this.swapiService.getAllPlanets} /> */}
        </div>
      </ErrorBoundery>
    );
  }
};
