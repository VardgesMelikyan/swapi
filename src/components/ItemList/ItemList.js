import React, { Component } from 'react';
import { withData } from '../hoc-helper/withData'
import ErrorBoundery from '../Alerts/ErrorBoundery';
import SwapiService from '../../services/SwapiService';
import './ItemList.css';

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props
    const items = data.map((item) => {
        const { id } = item
        const label = renderLabel(item)
        return (
            <li className="list-group-item"
                key={id}
                onClick={() => props.onItemSelected(id)}>
                {label}
            </li>
        );
    })
    return (
        <ErrorBoundery>
            <ul className="item-list list-group">
                {items}
            </ul>
        </ErrorBoundery>
    );
}
const { getAllpeaple } = new SwapiService();
export default withData(ItemList, getAllpeaple);