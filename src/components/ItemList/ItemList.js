import React, { Component } from 'react';
// import SwapiService from '../../services/SwapiService';
import Loading from '../Loading';
import ErrorIndicator from '../Alerts/ErrorIndicator';
import './ItemList.css';
import { get } from 'https';

export default class ItemList extends Component {
    state = {
        itemList: null,
        loading: true,
        error: false
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    componentDidMount() {
        const { getData } = this.props
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            })
            .catch(this.onError)
    }
    renderItems = (arr) => {
        return arr.map(({ name, id }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        })
    }
    render() {
        const { itemList, error, loading } = this.state

        const hasData = !(loading || error)
        const errorIndicator = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Loading /> : null
        if (!itemList) {
            return <Loading />
        }
        const items = this.renderItems(itemList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}