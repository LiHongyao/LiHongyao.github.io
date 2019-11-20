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
import "font-awesome/css/font-awesome.min.css";
import { store } from "./store/index";
const mapStateToProps = state => ({
  title: state.title,
  isShowTabBar: state.isShowTabBar
})

function App(props) {
  store.subscribe(() => {
    console.log('state状态改变了，新状态如下')
    console.log(store.getState())
  })
  return (
    <Router>
      <div className="App">
        {/* 头部 */}
        <NavigationBar show={!props.isShowTabBar} title={props.title} history={props.history} />
        {/* 内容 */}
        {renderRoutes(routes)}
        {/* 尾部 */}
        <TabBar show={props.isShowTabBar} />
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, null)(App);