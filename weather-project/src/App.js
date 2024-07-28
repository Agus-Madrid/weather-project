import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { WeatherProvider } from './providers/WeatherProvider';
import { LocationProvider } from './providers/LocationProvider';

function App() {
  return (
    <>
    <LocationProvider>
      <WeatherProvider>
          <Header />
          <Home/>
      </WeatherProvider>
     </LocationProvider>
    </>
  );
}

export default App;
