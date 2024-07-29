import React, { createContext, useContext, useEffect, useState } from 'react';
import { useWeather } from './WeatherProvider';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const { weather } = useWeather();

    const getNews = async () => {
        try {
            const fromDate = new Date();
            fromDate.setMonth(fromDate.getMonth() - 1);
            const formattedDate = fromDate.toISOString().split('T')[0];

            let query = 'calm weather';
            if (weather) {
                if (weather.wind.speed >= 11) {
                    query = 'windy';
                } else if (weather.main.temp > 20) {
                    query = 'heat';
                } else if (weather.clouds && weather.clouds.all > 50) {
                    query = 'cloudy';
                }
            }
            // console.log('Query:', query);

            const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${formattedDate}&sortBy=publishedAt&apiKey=d8e96e18a2bb45b881d33a8f793151df`);
            const data = await response.json();
            // console.log('News data:', data);
            setNews(data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        getNews();
    }, [weather]);

    return (
        <NewsContext.Provider value={{ news }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => useContext(NewsContext);
