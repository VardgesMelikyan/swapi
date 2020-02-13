import React, { Component } from 'react';
import Header from './components/Header';
import RandomPlanet from './components/RandomPlanet';
import PeoplePage from './components/PeoplePage';
import ItemDetails from './components/ItemDetails';
import Record from './components/Record';
import ItemList from './components/ItemList';
// import PlanetPage from './components/PlanetPage';
import ErrorBoundery from './components/Alerts/ErrorBoundery';
import SwapiService from './services/SwapiService'
import Row from './components/Row'
import './App.css';
import './customBootstrap/bootstrap.min.css'
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
    const { getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeaple,
      getAllPlanets,
      getAllStarships
    } = this.swapiService
    const personDetails = {
      right: (
        <ItemDetails
          itemId={1}
          getData={getPerson}
          getImageUrl={getPersonImage} >

          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>),
      left: (<ItemList
        onItemSelected={this.onItemSelected}
        getData={getAllPeaple}
      >
        {
          (item) =>
            (`${item.name} (${item.birthYear}) `)
        }
      </ItemList>)
    };
    const starshipDetails = {
      right: (
        <ItemDetails
          itemId={11}
          getData={getStarship}
          getImageUrl={getStarshipImage} >

          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="passengers" label="Passengers" />
          <Record field="hyperdriveRating" label="Hyperdrive Rating" />

        </ItemDetails>),
      left: (<ItemList
        onItemSelected={this.onItemSelected}
        getData={getAllStarships}
      >
        {
          (item) =>
            (`${item.name} `)
        }
      </ItemList>)
    };
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
          <Row left={personDetails.left} right={personDetails.right} />
          <Row left={starshipDetails.left} right={starshipDetails.right} />
        </div>
      </ErrorBoundery>
    );
  }
};
