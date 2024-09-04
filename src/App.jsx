import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6
  api = import.meta.env.VITE_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News api={this.api} setProgress={this.setProgress} key='general' pageSize={this.pageSize} category='general' country='in' />} />
            <Route exact path="/general" element={<News api={this.api} setProgress={this.setProgress} key='general' pageSize={this.pageSize} category='general' country='in' />} />
            <Route exact path="/business" element={<News api={this.api} setProgress={this.setProgress} key='business' pageSize={this.pageSize} category='business' country='in' />} />
            <Route exact path="/entertainment" element={<News api={this.api} setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} category='entertainment' country='in' />} />
            <Route exact path="/health" element={<News api={this.api} setProgress={this.setProgress} key='health' pageSize={this.pageSize} category='health' country='in' />} />
            <Route exact path="/sports" element={<News api={this.api} setProgress={this.setProgress} key='sports' pageSize={this.pageSize} category='sports' country='in' />} />
            <Route exact path="/science" element={<News api={this.api} setProgress={this.setProgress} key='science' pageSize={this.pageSize} category='science' country='in' />} />
            <Route exact path="/technology" element={<News api={this.api} setProgress={this.setProgress} key='technology' pageSize={this.pageSize} category='technology' country='in' />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
