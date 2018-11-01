import React from 'react';
import { render } from 'react-dom';
// import Playlist from '../playlist/components/playlist';
import Home from '../pages/containers/home';
import datos from '../api.json';


const app = document.getElementById('app');
render(<Home data={datos}/>,app);