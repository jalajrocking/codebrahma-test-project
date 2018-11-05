import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainComponent from './containers/MainComponent/MainComponent';

class CodeBrahmaTestProjectRoutes extends Component {

  render() {
    return (<div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={MainComponent} />
        </div>
      </BrowserRouter>
    </div>)
  }
}

export default CodeBrahmaTestProjectRoutes
