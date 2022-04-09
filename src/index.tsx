/* eslint-disable import/no-webpack-loader-syntax */
import { createRoot } from 'react-dom/client';
// @ts-ignore
import mapboxgl from '!mapbox-gl';

import { MapsApp } from './MapsApp';

mapboxgl.accessToken = 'pk.eyJ1IjoibmVidXJhIiwiYSI6ImNsMXFweWh3MzE3YW8za21qbnhsdG84MGkifQ.D__zijoyee36iJwyANzjLw';

if (!navigator.geolocation) {
    alert('Su navegador no tiene la opcion de Geolocalizacion')
    throw new Error('Su navegador no tiene la opcion de Geolocalizacion')
}

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<MapsApp />);