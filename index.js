import React from 'react'
import {render} from 'react-dom'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import {DogPage, Home} from './app/page'
import AppFrame from './app/component/AppFrame'

const Root = () => (
    <Router>
        <div>
            <Route path='/' component={AppFrame} />
            <Route exact path='/' component={Home} />
            <Route exact path='/dog' component={DogPage} />
        </div>
    </Router>
)

render(<Root />, document.getElementById('app'))
