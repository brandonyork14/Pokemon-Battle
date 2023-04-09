import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import { useState,useEffect } from 'react';
import { createContext } from 'react';


export const MyPokemon = createContext([])

export default function App() {
    const [capturedPokemon, setCapturedPokemon] = useState([]);


    return (
        <div>
            <header className='nav'>
                <Header capturedPokemon = {capturedPokemon}/>
            </header>
            <section>
                <MyPokemon.Provider value={{capturedPokemon, setCapturedPokemon}} >
                <Outlet />
                </MyPokemon.Provider>
            </section>
        </div>
    )
};
  



