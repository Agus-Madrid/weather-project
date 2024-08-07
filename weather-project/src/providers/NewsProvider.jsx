import React, { createContext, useContext, useEffect, useState } from 'react';
import { useWeather } from './WeatherProvider';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const { weather } = useWeather();

    const getNews = async () => {
        try {
            if(!weather) return;
            
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
