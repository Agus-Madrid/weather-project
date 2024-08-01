// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import {About} from './pages/About';
import {Info} from './pages/Info';
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
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/info" component={Info} />
            </Routes>
          </Router>
        </NewsProvider>
      </WeatherProvider>
     </LocationProvider>
    </>
  );
}

export default App;
