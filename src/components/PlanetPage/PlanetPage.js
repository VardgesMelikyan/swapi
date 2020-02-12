import React, { Component } from 'react'
import PlanetDetails from '../PlanetDetails';
import ItemList from '../ItemList';
import ErrorBoundery from '../Alerts/ErrorBoundery';
import Row from '../Row'

export default class PeoplePage extends Component {
    state = {
        selectedPlanet: 1
    }
    onPlanetSelected = (selectedPlanet) => {
        this.setState({
            selectedPlanet: selectedPlanet
        })
    }
    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.props.getData}
            >
                {(item) => (
                    `${item.name} (${item.diameter})`
                )
                }
            </ItemList>
        )
        // const planetDetails = (
        //     <ErrorBoundery>
        //         <PlanetDetails planetId={this.state.selectedPlanet} />
        //     </ErrorBoundery>
        // );
        return (
            <Row left={itemList} right={'planetDetails'} />
        );
    }
}