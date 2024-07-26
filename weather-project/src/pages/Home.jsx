import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { getWeather } from '../helpers/getWeather';


export const Home = () => {
    // NOTAS: No es necesario rodri que tengas un typeOfClassname, podes hacerlo directamente en el archivo de Card.jsx, es lo que buscamos
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState(null);
    const [position, setPosition] = useState(null);

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
        }
    }, [weather]);
    
    return (
            <main className='w-3/4 flex mt-4 h-auto m-auto'>
                {!weather ? <h1 className='text-yellow-50'>Loading..</h1> : 
                <>
                    <section className='main-content w-2/3 flex justify-center p-4 flex-col gap-4 items-center'>
                
                        <Card title={'Temperature on ' + country} description={'Lugar ' + weather.name} temperature={'Temperature ' + weather.main.temp} typeOfCard={'main_card'}/>
                        <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfCard={'main_card'}/>
                        <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfCard={'main_card'}/>
                        <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfCard={'main_card'}/>
                        <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfCard={'main_card'}/>
                    </section>
                    <aside className='w-1/3 flex justify-start gap-4 p-4 flex-col items-center'>
                        <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfCard={'aside_card'}/>
                        <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfCard={'aside_card'}/>
                        <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfCard={'aside_card'}/>
                    </aside>
                </>
                }
            </main>
    );
}