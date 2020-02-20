import React from 'react';
import ItemDetails from '../ItemDetails';
import Record from '../Record'
import withSwapiService from '../hoc-helper/withSwapiService'

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="starshipClass" label="Starship Class" />
            <Record field="length" label="Length" />
            <Record field="hyperdriveRating" label="Hyperdrive Rating" />
        </ItemDetails>
    );
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)