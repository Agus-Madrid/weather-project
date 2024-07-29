import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { WeatherProvider } from './providers/WeatherProvider';
import { LocationProvider } from './providers/LocationProvider';
import { NewsProvider } from './providers/NewsProvider';

function App() {
  return (
    <>
    <LocationProvider>
      <WeatherProvider>
         <NewsProvider>
          <Header />
          <Home/>
        </NewsProvider>
      </WeatherProvider>
     </LocationProvider>
    </>
  );
}

export default App;
