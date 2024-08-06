import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import {About} from './pages/About';
import { WeatherProvider } from './providers/WeatherProvider';
import { LocationProvider } from './providers/LocationProvider';
import { NewsProvider } from './providers/NewsProvider';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <LocationProvider>
      <WeatherProvider>
         <NewsProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </Router>
        </NewsProvider>
      </WeatherProvider>
     </LocationProvider>
    </>
  );
}

export default App;
