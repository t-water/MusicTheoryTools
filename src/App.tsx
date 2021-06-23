import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScaleDegrees from './components/ScaleDegrees';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/degrees'>
          <ScaleDegrees/>
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
