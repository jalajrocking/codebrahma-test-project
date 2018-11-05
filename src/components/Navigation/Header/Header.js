import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

  render() {
    return (<header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">CodeBrahma Test Project</a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </header>)
  }
}

export default withRouter(Header);
