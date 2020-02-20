import React from 'react'
import { PersonList, PersonDetails } from '../sw-component';
import { withRouter } from 'react-router-dom'
import Row from '../Row'
const PeaplePage = ({ history, match }) => {
    const id = !match.params.id ? 1 : match.params.id
    return (
        <Row left={<PersonList onItemSelected={(id) => history.push(id)} />} right={<PersonDetails itemId={id} />} />
    );
}
export default withRouter(PeaplePage)