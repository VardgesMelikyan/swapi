import React, { Component } from 'react'
import { PlanetList, PlanetDetails } from '../sw-component';
import Row from '../Row'
export default class PlanetsPage extends Component {
    state = {
        selectidItem: 3
    }
    onItemSelected = (selectidItem) => {
        this.setState({ selectidItem })
    }
    render() {
        const { selectidItem } = this.state
        return (
            <Row left={<PlanetList onItemSelected={this.onItemSelected} />} right={<PlanetDetails itemId={selectidItem} />} />
        );
    }
}