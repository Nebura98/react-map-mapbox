import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibmVidXJhIiwiYSI6ImNsMXFweWh3MzE3YW8za21qbnhsdG84MGkifQ.D__zijoyee36iJwyANzjLw'
    }
})

export default directionsApi;