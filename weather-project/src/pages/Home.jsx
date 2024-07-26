import React, { useEffect } from 'react';
import { Card } from '../components/Card';
import { getWeather } from '../helpers/getWeather';


export const Home = () => {

    // Effect to fetch data when the component mounts
    useEffect(() => {
    const pete=getWeather(44.34,10.99, 'd74433f649c3dcaf1fad920aa072f92d');
    console.log(pete);
  }, []); // Empty dependency array ensures the effect runs once on mount
    
    return (
        <body>
            <main className='w-3/4 flex mt-4 h-auto justify-center m-auto'>
                <section className='main-content w-2/3 flex justify-center bg-gray-800 p-4 flex-col gap-4 items-center'>
                    <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfClassname={'card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'}/>
                    <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfClassname={'card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'}/>
                    <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfClassname={'card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'}/>
                    <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfClassname={'card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'}/>
                    <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfClassname={'card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'}/>
                </section>
                <aside className='w-1/3 bg-orange-400 flex justify-center gap-4 p-4 flex-col items-center'>
                    <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfClassname={'card card-actual-temp w-5/6 bg-white rounded-lg h-[14rem]'}/>
                    <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfClassname={'card card-actual-temp w-5/6 bg-white rounded-lg h-[14rem]'}/>
                    <Card title={'header'} description={'Lugar'} temperature={'temp'} typeOfClassname={'card card-actual-temp w-5/6 bg-white rounded-lg h-[14rem]'}/>
                </aside>
            </main>
        </body>  
    );
}