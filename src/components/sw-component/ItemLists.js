import React from 'react';
import ItemList from '../ItemList';
import { listData } from '../hoc-helper/listData';
import withSwapiService from '../hoc-helper/withSwapiService'
const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeaple
    };
};
const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};
const mapPlanetsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};
const withChildFuction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props} >
                {fn}
            </Wrapped>);
    }
}
const renderPerson = ({ name, gender }) => <span>{name} ({gender})</span>
const renderPlanet = ({ name, climate }) => <span>{name} ({climate})</span>
const renderStarship = ({ name, starshipClass }) => <span>{name} ({starshipClass})</span>
const PersonList = withSwapiService(mapPersonMethodsToProps)(
    listData(
        withChildFuction(renderPerson)(
            ItemList)));
const PlanetList = withSwapiService(mapPlanetsMethodsToProps)(
    listData(
        withChildFuction(renderPlanet)(
            ItemList)));
const StarshipList = withSwapiService(mapStarshipsMethodsToProps)(
    listData(
        withChildFuction(renderStarship)(
            ItemList)));
export {
    PersonList,
    PlanetList,
    StarshipList
}