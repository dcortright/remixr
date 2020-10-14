import {hot} from 'react-hot-loader';
import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Layout} from 'antd';
import ReactGA from 'react-ga';

import Home from './components/Home';
import Playlist from './components/Playlists';
import Results from './components/Results';
import Footer from './components/Footer';

import './App.less';

import createHistory from 'history/createBrowserHistory';

const {Content} = Layout;

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
const history = createHistory();

function App() {
    return (
        <div className="body">
            <Router history={history}>
                <Route exact path="/" component={Home}/>
                <Content>
                    <Route path="/playlists" component={Playlist}/>
                    <Route path="/results" component={Results}/>
                    <Footer/>
                </Content>
            </Router>
        </div>
    );
}

export default hot(module)(App);
