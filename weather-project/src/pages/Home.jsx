// Home.jsx
import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useWeather } from '../providers/WeatherProvider';
import { usePosition } from '../providers/LocationProvider';
import { Banner } from '../components/Banner';
import { useNews } from '../providers/NewsProvider';
import sunriseIcon from '../assets/icons/sunrise.svg';
import sunsetIcon from '../assets/icons/sunset.svg';

export const Home = () => {
    const { position } = usePosition();
    const { weather, country, windStatus } = useWeather();
    const { news } = useNews();

    const ifLargerCut = (text, length) => {
        if(text.length > length) {
            return text.slice(0, length) + '...';
        }
        return text;
    };

    return (
        <>
            <Banner />
            <main className='w-3/4 flex mt-4 h-auto m-auto'>
                
                {!weather ? <h1 className='text-yellow-50'>Loading...</h1> : 
                <>
                    <section className='main-content w-2/3 flex justify-start p-4 pl-0 pr-0 flex-col gap-4 items-center'>
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
                    <Card 
                        title={'Humidity and pressure on ' + weather.name} 
                        weather={weather} 
                        temperature={'temp'} 
                        typeOfCard={'other'}
                        children={
                            <div className='flex flex-col gap-4 p-4 justify-center'>
                                <div className='flex gap-4 items-center'>
                                    <h2 className='text-2xl'>HUMIDITY </h2>
                                    <h2 className='text-2xl text-[#86c4c7]'>{weather.main.humidity}%</h2>
                                    <div className='w-full bg-gray-200 rounded-full h-2.5'>
                                        <div 
                                            className='bg-blue-600 h-2.5 rounded-full' 
                                            style={{width: `${weather.main.humidity}%`}}>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <h2 className='text-2xl '>PRESSURE </h2>
                                    <h2 className='text-2xl text-[#86c4c7]'>{weather.main.pressure} hPa</h2>
                                    {/* <i className="fas fa-tachometer-alt text-[#86c4c7]"> </i> */}
                                </div>
                            </div>
                        }
                    />
                    <Card 
                        title={'Sunrise and sunset on ' + weather.name} 
                        weather={weather} 
                        temperature={'temp'} 
                        typeOfCard={'other'}
                        children={
                            <div className='flex flex-col gap-4 p-4 justify-center'>
                                <div className='flex gap-4'>
                                    <img src={sunriseIcon} alt="Sunrise icon" className='w-8 h-8'/>
                                    <h2 className='text-2xl'>SUNRISE </h2>
                                    <h2 className='text-2xl text-[#86c4c7]'>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</h2>
                                </div>
                                <div className='flex gap-4'>
                                     <img src={sunsetIcon} alt="Sunset icon" className='w-8 h-8'/>
                                    <h2 className='text-2xl '>SUNSET </h2>
                                    <h2 className='text-2xl text-[#86c4c7]'>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</h2>
                                </div>
                            </div>
                        }
                    />
                    <Card 
                        title={'Clouds on ' + weather.name} 
                        weather={weather} 
                        temperature={'temp'} 
                        typeOfCard={'other'}
                        children={
                            <div className='flex flex-col gap-4 p-4 justify-center'>
                                <div className='flex gap-4'>
                                    <h2 className='text-2xl'>CLOUDINESS </h2>
                                    <h2 className='text-2xl text-[#86c4c7]'>{weather.clouds.all} %</h2>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <h2 className='text-2xl '>DESCRIPTION </h2>
                                    <h2 className='text-2xl text-[#86c4c7]'>{weather.weather[0].description}</h2>
                                    <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon" />
                                </div>
                            </div>
                        }
                    />
                </section>
                <aside className='w-1/3 flex justify-start gap-4 p-4 flex-col items-center'>
                    {news.filter(article => article.urlToImage).slice(0, 3).map((article, index) => (
                        <Card
                            key={index}
                            title={<a href={article.url} target="_blank" rel="noopener noreferrer">{ifLargerCut(article.title,47)}</a>}
                            weather={weather}
                            temperature={'temp'}
                            typeOfCard={'aside_card'}
                            children={
                                <div className='card-content flex flex-col justify-center w-full h-full items-center'>
                                    {article.urlToImage && (
                                        <img src={article.urlToImage} alt={article.title} className='w-full h-full object-cover rounded-lg' />
                                    )}
                                </div>
                            }
                        />
                    ))}
                </aside>
            </>
        }
        </main>
        </>
    );
};
