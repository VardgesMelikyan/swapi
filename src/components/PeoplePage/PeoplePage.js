import React, { Component } from 'react'
import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';
import './PeoplePage.css'
export default class PeoplePage extends Component {
    state = {
        selectedPerson: 1
    }
    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson: selectedPerson
        })
    }
    render() {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
}