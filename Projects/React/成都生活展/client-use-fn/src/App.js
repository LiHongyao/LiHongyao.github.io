import React, { useReducer } from 'react';
import AppContext from './context';
import { initialState, reducer } from './store';
import routes from './routes';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {
  renderRoutes
} from 'react-router-config';
import AppHeader from './components/header/app-header';
import AppFooter from './components/footer/app-footer';

const App = () => {
  // => redux
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="App" >
          {/* 头部 */}
          <AppHeader title={state.title} visible={state.isAppHeaderVisible} btnVisible={state.isBackBtnVisible} />
          {/* 内容 */}
          {renderRoutes(routes)}
          {/* 尾部 */}
          <AppFooter visible={state.isAppFooterVisible} />
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
