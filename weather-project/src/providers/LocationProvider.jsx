import React, { createContext, useContext, useState, useEffect } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [position, setPosition] = useState(null);

    const getPosition = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition({
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    });
                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                }
            );
        }
    };

    useEffect(() => {
        getPosition();
    }, []);

    return (
        <LocationContext.Provider value={{ position }}>
            {children}
        </LocationContext.Provider>
    );
}

export const usePosition = () => useContext(LocationContext);