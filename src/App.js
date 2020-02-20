import React, { Component } from 'react';
import Header from './components/Header';
import RandomPlanet from './components/RandomPlanet';
import { SwapiServiceProvider } from './components/SwapiServiceContest'
import ErrorBoundery from './components/Alerts/ErrorBoundery';
import SwapiService from './services/SwapiService'
import { PeaplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from './components/Pages'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import './customBootstrap/bootstrap.min.css'
import { StarshipDetails } from './components/sw-component';
export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    isLoggedIn: false
  }
  onLogin = () => {
    return this.setState({ isLoggedIn: true })
  }
  render() {
    return (
      <ErrorBoundery>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div>
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path='/' render={() => <h2>Hello</h2>} exact={true} />
                <Route path='/peaple/:id?' component={PeaplePage} />
                <Route path='/planets' component={PlanetsPage} />
                <Route path='/starships' exact component={StarshipsPage} />
                <Route path='/starships/:id' render={
                  ({ match, location, history }) => {
                    return <StarshipDetails itemId={match.params.id} />
                  }
                }

                />
                <Route path='/login' exact render={() => (
                  <LoginPage
                    isLoggedIn={this.state.isLoggedIn}
                    onLogin={this.onLogin}

                  />
                )} />
                <Route path='/secret' exact render={() => (
                  <SecretPage isLoggedIn={this.state.isLoggedIn} />
                )} />
                <Redirect to={'/404'} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundery>
    );
  }
};
