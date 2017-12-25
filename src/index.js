import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import CounterContainer from "./component/counter/counter-container";
import store from "./store";


ReactDOM.render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
);
