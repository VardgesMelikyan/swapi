import React, { Component } from 'react';
import Loading from '../Loading';
import ErrorBoundery from '../Alerts/ErrorBoundery';
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
        if (getData)
            getData()
                .then((itemList) => {
                    this.setState({
                        itemList
                    });
                })
                .catch(this.onError)
    }
    renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item
            const label = this.props.children(item)
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        })
    }
    render() {
        const { itemList, error, loading } = this.state
        if (error) {
            return <ErrorBoundery />
        }
        const hasData = !(loading || error)
        const spinner = loading ? <Loading /> : null
        if (!itemList) {
            return <Loading />
        }
        const items = this.renderItems(itemList)
        return (
            <ErrorBoundery>
                <ul className="item-list list-group">
                    {items}
                </ul>
            </ErrorBoundery>
        );
    }
}