import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import PersonDetailsView from './View/PersonDetailsView';
import Loading from '../Loading';
import ErrorIndicator from '../Alerts/ErrorIndicator';
import './PersonDetails.css';

export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        error: false,
        loading: true
    }
    componentDidMount() {
        this.updatePerson();
    }

    updatePerson() {
        const { personId } = this.props
        if (!personId) {
            return
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({
                loading: true
            })
            this.updatePerson();
        }
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    render() {
        const { loading, error } = this.state
        const hasData = !(loading || error)
        const errorIndicator = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Loading /> : null
        if (!this.props.personId) {
            return { errorIndicator }
        }
        const content = hasData ? <PersonDetailsView person={this.state.person} /> : null
        return (
            <div className="person-details card">
                {errorIndicator}
                {spinner}
                {content}
            </div>
        )
    }
}