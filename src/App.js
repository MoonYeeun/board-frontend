import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import NewPost from './components/NewPost';
import Header from './components/Header';
import PostContent from './components/PostContent';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Header></Header>
          <Route exact path="/" component={Home}></Route>
          <Route path="/write" component={NewPost}></Route>
          <Route path="/posts/:id" component={PostContent}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
