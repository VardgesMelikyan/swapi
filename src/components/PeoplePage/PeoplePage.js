import React, { Component } from 'react'
import ItemDetails from '../ItemDetails';
import ItemList from '../ItemList';
import ErrorBoundery from '../Alerts/ErrorBoundery';
import Row from '../Row'
import './PeoplePage.css'

export default class PeoplePage extends Component {
    state = {
        selectedItem: 1
    }
    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem: selectedItem
        })
    }
    render() {
        const itemList = (
            <ErrorBoundery>
                <ItemList
                    onItemSelected={this.onItemSelected}
                    getData={this.props.getData}
                >
                    {
                        (item) =>
                            (`${item.name} (${item.birthYear}) `)
                    }
                </ItemList>
            </ErrorBoundery>
        );
        const itemDetails = (
            <ErrorBoundery>
                <ItemDetails itemId={this.state.selectedItem} getData={this.props.getData} getImageUrl={this.props.getImageUrl} />
            </ErrorBoundery>
        );
        return (
            <Row left={itemList} right={itemDetails} />
        );
    }
}