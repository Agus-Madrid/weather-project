// WeatherProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePosition } from './LocationProvider';

// Crear el contexto
export const WeatherContext = createContext();

// Crear el proveedor de datos
export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const [country, setCountry] = useState('');
    const [windStatus, setWindStatus] = useState({
        status: '',
        color: '',
        description: ''
    });
    const { position } = usePosition() || {};

    const getWeather = async (lat, lon, apiKey) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return null;
        }
    };

    const kelvinToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    };
    
    const renderWindStatus = (windSpeed) => {
        if(windSpeed < 1.5){
            setWindStatus({
                status: 'Calm',
                color: '#93B1A6',
                description: 'Calm, you can perform your daily activities without any problem'
            });
        }
        if(windSpeed >= 1.5 && windSpeed < 6){
            setWindStatus({
                status: 'Moderate breeze',
                color: '#86c4c7',
                description: 'Moderate air, can cause discomfort'
            });
        }
        if(windSpeed >= 6 && windSpeed < 11){
            setWindStatus({
                status: 'Moderate wind',
                color: '#86c4c7',
                description: 'Moderate wind, can cause discomfort'
            });
        }
        if(windSpeed >= 11 && windSpeed < 25){
            setWindStatus({
                status: 'Strong wind',
                color: '#f5b461',
                description: 'Strong wind, can cause damage, take precautions'
            });
        }
        if(windSpeed >= 25){
            setWindStatus({
                status: 'Storm',
                color: '#f56161',
                description: 'Storm, take precautions'
            });
        }
        return;
    }

    useEffect(() => {
        const fetchWeather = async () =>{

            if(!position) return;
            const data = await getWeather(position.latitude,position.longitude, 'd74433f649c3dcaf1fad920aa072f92d');   
            setWeather(data);
        }  

        fetchWeather();
    }, [position]);

    useEffect(() => {
        if(weather){
            setCountry(weather.sys.country);
            renderWindStatus(weather.wind.speed);
        }
    }, [weather]);

    return (
        <WeatherContext.Provider value={{ weather, country, windStatus }}>
            {children}
        </WeatherContext.Provider>
    );
};

// Crear un hook para usar el contexto de manera más sencilla
export const useWeather = () => useContext(WeatherContext);
