// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import { WeatherProvider } from './providers/WeatherProvider';
import { LocationProvider } from './providers/LocationProvider';
import { NewsProvider } from './providers/NewsProvider';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';


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
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </Router>
        </NewsProvider>
      </WeatherProvider>
     </LocationProvider>
    </>
  );
}

export default App;
