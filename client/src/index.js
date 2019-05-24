import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

import App from './components/App'
import Welcome from './components/Welcome'
import Feature from './components/Feature'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import Singout from './components/auth/Singout'

const middlewares = [
  applyMiddleware(reduxThunk),
  {} + window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
]

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  compose(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signout" exact component={Singout} />
        <Route path="/feature" exact component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
