import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { getWeather } from '../helpers/getWeather';
import { Button } from '../components/Button';


export const Home = () => {
    // NOTAS: No es necesario rodri que tengas un typeOfClassname, podes hacerlo directamente en el archivo de Card.jsx, es lo que buscamos
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState(null);
    const [position, setPosition] = useState(null);
    const [windStatus, setWindStatus] = useState({
        status: '',
        color: '',
        description: ''
    });

    const kelvinToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    }
    
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
    }, []);

    useEffect(() => {
        const fetchWeather = async () =>{
            if(!position) return;
            const data = await getWeather(position.latitude,position.longitude, 'd74433f649c3dcaf1fad920aa072f92d');   
            setWeather(data);
        }  

        fetchWeather();
        
        console.log(weather);
    }, [position]);

    useEffect(() => {
        if(weather){
            setCountry(weather.sys.country);
            renderWindStatus(weather.wind.speed);
        }
    }, [weather]);
    
    return (
            <main className='w-3/4 flex mt-4 h-auto m-auto'>
                {!weather ? <h1 className='text-yellow-50'>Loading...</h1> : 
                <>
                    <section className='main-content w-2/3 flex justify-center p-4 flex-col gap-4 items-center'>
                        <Card 
                            title={'Temperature on ' + country + ', ' + weather.name} 
                            weather={weather}
                            description={'Lugar ' + weather.name} 
                            temperature={weather.main.temp} 
                            typeOfCard={'main_card'} 
                            />

                        <Card 
                            title={'Wind on ' + weather.name} 
                            weather={weather} 
                            temperature={'temp'} 
                            typeOfCard={'other'}
                            children={
                                <div className='flex flex-col gap-4 p-4 justify-center'>
                                    <div className='flex gap-4'>
                                        <h2 className='text-2xl'>SPEED </h2>
                                        <h2 className='text-2xl text-[#86c4c7]'>{weather.wind.speed} m/s</h2>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h2 className='text-2xl '>DIRECTION </h2>
                                        <h2 className='text-2xl text-[#86c4c7]'>{weather.wind.deg} °</h2>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h2 className='text-2xl '>STATUS </h2>
                                        <h2 className='text-2xl text-[#86c4c7]'>{windStatus.status}</h2>
                                    </div>
                                    <Button text='Get wind status' onClick={() => alert(windStatus.description)} typeOfButton={'info'}/>
                                </div>
                            }
                            />
                        <Card title={'header'} weather={weather} temperature={'temp'} typeOfCard={'other'}/>
                        <Card title={'header'} weather={weather} temperature={'temp'} typeOfCard={'other'}/>
                        <Card title={'header'} weather={weather} temperature={'temp'} typeOfCard={'other'}/>
                    </section>
                    <aside className='w-1/3 flex justify-start gap-4 p-4 flex-col items-center'>
                        <Card title={'header'} weather={weather} temperature={'temp'} typeOfCard={'aside_card'}/>
                        <Card title={'header'} weather={weather} temperature={'temp'} typeOfCard={'aside_card'}/>
                        <Card title={'header'} weather={weather} temperature={'temp'} typeOfCard={'aside_card'}/>
                    </aside>
                </>
                }
            </main>
    );
}