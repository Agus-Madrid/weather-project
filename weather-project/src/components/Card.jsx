import React from 'react';
// import sunriseIcon from '../assets/icons/sunrise.png';
// import sunsetIcon from '../assets/icons/sunset.png';

export const Card = ({ title, weather, temperature, typeOfCard, children }) => {

    const renderCardContent = () => {
        switch(typeOfCard) {
            case 'main_card':
                return (
                    <div className="card card-actual-temp w-full bg-[#040D12] rounded-lg minh-[16rem] text-white p-4 pt-0" style={{boxShadow: 'rgba(38, 38, 41, 0.2) 0px 7px 19px 0px'}}>
                        <div className="flex justify-center bg-black bg-opacity-20 rounded-t-lg text-xl py-4 text-white">
                            <h2 className='text-4xl'>
                                {title}
                            </h2>
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>
                            <div className="flex flex-col gap-4">    
                                <h1 className='text-9xl text-[#def365]'>{Math.round(temperature)}° </h1>
                                <div className="feels_like flex gap-4">
                                    <h2 className='text-4xl'>FEELS LIKE </h2>
                                    <h2 className='text-4xl text-[#def365]'>{Math.round(weather.main.feels_like)}°</h2>
                                </div>
                                <div className="feels_like flex gap-4">
                                    <h2 className='text-4xl'>MIN </h2>
                                    <h2 className='text-4xl text-[#def365]'>{Math.round(weather.main.temp_min)}°</h2>
                                </div>
                                <div className="feels_like flex gap-4">
                                    <h2 className='text-4xl'>MAX </h2>
                                    <h2 className='text-4xl text-[#def365]'>{Math.round(weather.main.temp_max)}°</h2>
                                </div>
                            </div>  
                        </div>
                        {children}
                    </div>
                );
            case 'aside_card':
                return (
                    <div className="card card-actual-temp w-full bg-[#31363F] rounded-lg h-[20rem] text-white">
                        <div className="flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg text-xl py-2">
                            {title}
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>s</h2>
                            <p>{temperature}</p>
                        </div>
                    </div>  
                );
            default:
                return (
                    <div className="card card-actual-temp w-full bg-[#222831] rounded-lg minh-[16rem] text-white" style={{boxShadow: 'rgba(38, 38, 41, 0.2) 0px 7px 19px 0px'}}>
                        <div className="flex px-6 bg-black bg-opacity-20 rounded-t-lg text-4xl py-3 text-white">
                            {title}
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            {children}
                        </div>
                    </div>
                );
        }
    };

    return (
        <>
            {renderCardContent()}
        </>
    );
};
