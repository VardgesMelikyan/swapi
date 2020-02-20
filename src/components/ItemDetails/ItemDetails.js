import React, { Component } from 'react';
import Loading from '../Loading';
import ErrorBoundery from '../Alerts/ErrorBoundery';
import './ItemDetails.css';

export default class ItemDetails extends Component {
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
        if (!itemId || !getData || !getImageUrl) {
            return
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(itemId),
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
        const { loading, item, image } = this.state
        const spinner = loading ? <Loading /> : null
        if (!item) {
            return spinner
        }
        return (
            <ErrorBoundery>
                <div className="item-details card">
                    <img className="item-image"
                        src={image}
                        alt="item" />

                    <div className="card-body">
                        <h4>{item.name}</h4>
                        <ul className="list-group list-group-flush">
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, { item });
                                })
                            }
                        </ul>
                    </div>
                </div>
            </ErrorBoundery>
        )
    }
};