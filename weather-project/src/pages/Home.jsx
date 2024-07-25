import React from 'react';
import { Card } from '../components/Card';

export const Home = () => {

    return (
        <body>
            <main className='w-3/4 flex mt-4 h-auto justify-center m-auto'>
                <section className='main-content w-2/3 flex justify-center bg-gray-800 p-4 flex-col gap-4 items-center'>
                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg text-xl' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>
                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>
                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>

                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>
                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[10rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>


                </section>
               
                <aside className='w-1/3 bg-orange-400 flex justify-center gap-4 p-4 flex-col items-center'>
                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[14rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>
                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[14rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>
                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[14rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>
                    <div className='card card-actual-temp w-5/6 bg-white rounded-lg h-[14rem]'>
                        <div className='flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg' >
                            header
                        </div>
                        <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                            <h2>Lugar</h2>
                            <p>Temperatura: 0C</p>
                        </div>
                    </div>
                </aside>
            </main>
        </body>  
    );
}