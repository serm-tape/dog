import React from 'react'
import {render} from 'react-dom'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import {DogPage, Home} from './app/page'
import AppFrame from './app/component/AppFrame'

import reducer from './app/redux/reducer/reducer'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Root = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path='/' component={AppFrame} />
                <Route exact path='/' component={Home} />
                <Route exact path='/dog' component={DogPage} />
            </div>
        </Router>
    </Provider>
)

render(<Root />, document.getElementById('app'))
