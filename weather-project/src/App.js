import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { WeatherProvider } from './providers/WeatherProvider';
function App() {
  return (
    <>
     <WeatherProvider>
      <Header />
      <Home/>
     </WeatherProvider>
    </>
  );
}

export default App;
