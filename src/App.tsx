import { initializeIcons } from '@fluentui/font-icons-mdl2';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import IntervalTraining from './components/IntervalTraining';
import ScaleDegrees from './components/ScaleDegrees';

initializeIcons();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/degrees'>
          <ScaleDegrees/>
        </Route>
        <Route path = '/intervals'>
          <IntervalTraining/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
