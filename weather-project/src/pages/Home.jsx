// Home.jsx
import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useWeather } from '../providers/WeatherProvider';
import { usePosition } from '../providers/LocationProvider';

export const Home = () => {
    const {position} = usePosition();
    const { weather, country, windStatus } = useWeather();

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
};
