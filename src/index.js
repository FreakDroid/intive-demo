/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import FootballPlayerPage from './components/FootballPlayers/FootballPlayerPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

render(
    <FootballPlayerPage />,
    document.getElementById('app')
);