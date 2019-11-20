import React from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import routes from "./routes";
import TabBar from "./components/TabBar/TabBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  return (
    <Router>
      <div className="App">
        {/* 头部 */}
        <NavigationBar />
        {/* 内容 */}
        {renderRoutes(routes)}
        {/* 尾部 */}
        <TabBar />
      </div>
    </Router>
  );
}

export default App;
