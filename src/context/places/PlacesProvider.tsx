import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers/index';
import { searchApi } from '../../apis';
import { PlacesResponse, Feature } from '../../interfaces/places';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

  useEffect(() => {
    getUserLocation()
      .then(lngLat => dispatch({ type: 'setUserLocation', playload: lngLat }))
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', playload: [] })
      return [];
    }
    if (!state.userLocation) throw new Error('No se encuentra la ubicacion del usuario')
    dispatch({ type: 'setLoadingPlaces' })

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation!.join(',')
      }
    });

    console.log(resp.data);
    dispatch({ type: 'setPlaces', playload: resp.data.features })

    return resp.data.features
  }


  return (
    <PlacesContext.Provider value={{
      ...state,


      //Metodos
      searchPlacesByTerm
    }}>
      {children}
    </PlacesContext.Provider>
  )
}
