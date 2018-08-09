import React, {Component} from 'react';
import routes from '../router'
import {
  BrowserRouter as Router, // 路由器组件
  Switch
} from 'react-router-dom';
import {
  renderRoutes
} from 'react-router-config'
import '../styles/common.css'
class App extends Component {
  render () {
    return (
      <Router>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
      </Router>)
  }
}

export default App;
