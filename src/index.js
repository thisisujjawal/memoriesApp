import react from 'react'
import reactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux';
import {createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';


const store = createStore(reducers, compose(applyMiddleware(thunk)));
reactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));