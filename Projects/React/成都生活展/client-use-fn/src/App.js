import React, { useReducer } from 'react';
import AppContext from './context';
import { initialState, reducer } from './store';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <AppContext value={{ state, dispatch }}>
        <div className="App" >

        </div>
      </AppContext>
    </Router>
  );
}

export default App;
