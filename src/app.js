import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import 'scss/global.scss'

import home from 'pages/home';
import detail from 'pages/detail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={home} exact />
        <Route path='/detail' component={detail} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App