import React from 'react';
import reactDOM from 'react-dom';
import { createRoot} from 'react-dom/client';
import RenderAllPlayers from './RenderAllPlayers.js'
import { HashRouter, Routes, Route } from 'react-router-dom';
import RenderSinglePlayer from './RenderSinglePlayer.js';
import SearchBar from './SearchBar.js';

const App = () => {
    return (
        <div>
        <SearchBar />
           <Routes>
            <Route path='/' element={ <RenderAllPlayers/> }/>
            <Route path='/player/:id' element={ <RenderSinglePlayer/> }/>

           </Routes>
        </div>
    )
}



const appElement = document.getElementById('app');
const root = createRoot(appElement);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
    );