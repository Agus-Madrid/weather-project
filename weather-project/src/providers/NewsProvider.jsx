import React, { createContext, useContext, useEffect, useState } from 'react';
import { useWeather } from './WeatherProvider';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const { weather } = useWeather();

    const getNews = async () => {
        try {
            if(!weather) return;
            
            const fromDate = new Date();
            fromDate.setMonth(fromDate.getMonth() - 1);
            const formattedDate = fromDate.toISOString().split('T')[0];

            let query = 'calm weather';
            let relevantKeywords = '';

            if (weather) {
                if (weather.wind.speed >= 11) {
                    query = 'windy';
                    relevantKeywords = 'surf, kites';
                } else if (weather.main.temp > 20) {
                    query = 'heat';
                    relevantKeywords = 'beach, UV, solar protector';
                } else if (weather.clouds && weather.clouds.all > 50) {
                    query = 'cloudy';
                    relevantKeywords = 'rain, rainy';
                }
            }

            const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=GqS4A51JZTQcnh7c9jGp6RJp84wIFXomNhGB7zpp&search=weather`);

            console.log(response);
            const data = await response.json();
            setNews(data.data);
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
