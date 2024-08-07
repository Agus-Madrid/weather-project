import React, {createContext, useContext, useState, useEffect} from 'react';
import { useWeather } from './WeatherProvider';

export const ColorContext = createContext();

export const ColorProvider = ({children}) => {
    const [primaryColor, setPrimaryColor] = useState('#3b82f6');
    const [secondaryColor, setSecondaryColor] = useState('#1d4ed8');
    const { weather } = useWeather();

    const changeColor = (firstColor,secondColor) => {
        setPrimaryColor(firstColor);
        setSecondaryColor(secondColor);
    };

    useEffect(() => {
        if(!weather) return;

        if(weather.main.temp < 10){
            changeColor('#3b82f6', '#1d4ed8');
        }
        if(weather.main.temp >= 10 && weather.main.temp < 20){
            changeColor('#f7cf4d', '#fac413');
        }
        if(weather.main.temp >= 20){
            changeColor('#f84949', '#f51d1d');
        }

    }, [weather]);

    return (
        <ColorContext.Provider value={{primaryColor,secondaryColor}}>
            {children}
        </ColorContext.Provider>
    );
}

export const useColor = () => useContext(ColorContext);