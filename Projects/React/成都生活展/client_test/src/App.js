import React from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import TabBar from "./components/TabBar/TabBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  title: state.title
})

function App(props) {
  return (
    <Router>
      <div className="App">
        {/* 头部 */}
        <NavigationBar title={props.title}/>
        {/* 内容 */}
        {renderRoutes(routes)}
        {/* 尾部 */}
        <TabBar />
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, null)(App);