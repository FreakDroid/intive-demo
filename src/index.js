/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import FootballPlayerPage from './components/FootballPlayers/FootballPlayerPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import {Provider} from 'react-redux';
import {loadFootballPlayers} from './actions/playersActions';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadFootballPlayers());

render(
    <Provider store={store}>
        <FootballPlayerPage />
    </Provider>,
    document.getElementById('app')
);