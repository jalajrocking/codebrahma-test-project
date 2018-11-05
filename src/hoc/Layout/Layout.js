import React, {Component} from 'react';

import Header from '../../components/Navigation/Header/Header';

class Layout extends Component {

  render() {
    let element;
    if (this.props.children) {
      element = this.props.children
    }

    return (<div className="wrapper">
        <Header />
        {element}
      </div>)
  }
}

export default Layout;
