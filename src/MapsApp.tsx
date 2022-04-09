import { MapProvider, PlacesProvider } from './context/index';
import { HomeScreen } from './screens/index';
import './styles.css'
export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen />
            </MapProvider>
        </PlacesProvider>
    )
}
