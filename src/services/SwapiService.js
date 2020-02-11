import { Component } from 'react'

export default class SwapiService extends Component {
    _apiBase = 'https://swapi.co/api';

    getResourse = async (url) => {
        let res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, ${res.status}`)
        }
        return await res.json()
    }

    getAllPeaple = async () => {
        let res = await this.getResourse(`/people/`);
        return res.results.map(this._transformPerson);
    }
    getPerson = async (id) => {
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person)
    }

    getAllPlanets = async () => {
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}/`)
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        let res = await this.getResourse(`/starships/`);
        return res.results.map(this._transformStarship);
    }
    getStarship = async (id) => {
        return this.getResourse(`/starships/${id}/`);
    }
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/
        return item.match(idRegExp)[1]
    }
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformPerson = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            manufacruter: starship.manufacturer,
            costInCreadits: starship.costInCreadits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapasity: starship.cargoCapasity
        }
    }
}
