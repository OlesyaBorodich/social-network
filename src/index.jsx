
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import './index.css';
import {Provider} from "react-redux";



let rerenderEntireTree=(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
                </Provider></BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())
//нам больше не нужно субскрайбится т к connect сам локально субскрайбит
// store.subscribe(()=>{
//     let state=store.getState();
//     rerenderEntireTree(state);
// });
serviceWorker.unregister();
