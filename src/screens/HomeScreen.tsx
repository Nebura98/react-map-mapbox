import { MapView } from '../components/index';
import { BtnMyLocation, ReactLogo, SearchBar } from '../components/index';

export const HomeScreen = () => {
    return (
        <div>
            <MapView />
            <BtnMyLocation />
            <ReactLogo />
            <SearchBar />
        </div>
    )
}
