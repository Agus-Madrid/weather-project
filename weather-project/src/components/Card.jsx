import React from 'react';
// import sunriseIcon from '../assets/icons/sunrise.png';
// import sunsetIcon from '../assets/icons/sunset.png';

export const Card = ({ title, weather, temperature, typeOfCard, children }) => {

    const renderCardContent = () => {
        switch(typeOfCard) {
            case 'main_card':
                return (
                    <div className='w-full relative'>
                        <div className="  card card-actual-temp w-full bg-[#040D12] rounded-lg minh-[16rem] text-white p-4 pt-0 pb-6" style={{
                                boxShadow: 'rgba(38, 38, 41, 0.2) 0px 7px 19px 0px',
                                backgroundImage: `url("https://i.pinimg.com/564x/07/6e/c1/076ec18cc65e86984bf136203991ffc0.jpg")`, 
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}>
                            <div className="flex justify-center bg-black bg-opacity-20 rounded-t-lg text-xl py-4 text-white z-20">
                                <h2 className='text-4xl z-20'>
                                    {title}
                                </h2>
                            </div>
                            <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg -z-20'>
                                <div className="flex flex-col gap-4 z-10">    
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
                        <div className='inside-card absolute top-0 left-0 w-full h-full bg-black opacity-45 rounded-xl'>

                        </div>
                    </div>
                );
            case 'aside_card':
                return (
                    <div className="card card-actual-temp relative w-full bg-[#14171d] rounded-lg h-[20rem] -z-20 text-white flex">
                        <div className='card-content flex flex-col justify-centerrounded-b-lg items-center w-full h-full -z-10'>  
                            {/* <h2>s</h2> */}
                            {children}
                        </div>
                        <div className='absolute bottom-0 w-full h-[8rem] bg-[#000000c5] rounded-b-xl z-10 flex justify-center items-center'>
                            <p className='z-30 text-center pl-4 pr-4 font-bold'>
                                {title}
                            </p>
                        </div>
                        <div className='inside-card absolute top-0 left-0 w-full h-full bg-black opacity-45 rounded-xl -z-10'>

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
