import { PlacesState } from './PlacesProvider';
import { Feature } from '../../interfaces/places';


type PlacesAction =
    | { type: 'setUserLocation', playload: [number, number] }
    | { type: 'setPlaces', playload: Feature[] }
    | { type: 'setLoadingPlaces' }


export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.playload
            }
        case 'setLoadingPlaces':
            return {
                ...state,
                isLoadingPlaces: true,
                places: []
            }
        case 'setPlaces':
            return {
                ...state,
                isLoadingPlaces: false,
                places: action.playload
            }

        default:
            return state
    }
}