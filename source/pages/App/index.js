// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../init/store';

import { hot } from 'react-hot-loader';
import Scheduler from '../../components/Scheduler';

@hot(module)
export default class App extends Component {
    render () {
        return (
            <div>
                <Provider store = { store }>
                    <Scheduler />
                </Provider>
            </div>

        );
    }
}
