import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibmVidXJhIiwiYSI6ImNsMXFweWh3MzE3YW8za21qbnhsdG84MGkifQ.D__zijoyee36iJwyANzjLw'
    }
})

export default searchApi;