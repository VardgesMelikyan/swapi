import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import ItemDetailsView from './View/ItemDetailsView';
import Loading from '../Loading';
import ErrorBoundery from '../Alerts/ErrorBoundery';
import './ItemDetails.css';

export default class ItemDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        loading: true,
        image: null
    }
    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId || !getData) {
            return
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                })
            })
            .catch(this.onError)
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }
    render() {
        const { loading, error, image } = this.state
        const hasData = !(loading || error)
        const spinner = loading ? <Loading /> : null
        if (!this.props.itemId) {
            return <ErrorBoundery />
        }
        const content = hasData ? <ItemDetailsView item={this.state.item} image={image} /> : null
        return (
            <ErrorBoundery>
                <div className="item-details card">
                    {spinner}
                    {content}
                </div>
            </ErrorBoundery>
        )
    }
}