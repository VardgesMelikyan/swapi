import React from 'react';
import ItemDetails from '../ItemDetails';
import Record from '../Record'
import withSwapiService from '../hoc-helper/withSwapiService'
const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation period" />
            <Record field="climate" label="Climate" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails)
