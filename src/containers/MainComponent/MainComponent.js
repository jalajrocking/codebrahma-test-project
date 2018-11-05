import React, {Component} from 'react';

import Layout from '../../hoc/Layout/Layout';
import {GetRequest} from '../../services/ApiServices';

class MainComponent extends Component {

  count = 0;
  countDown = 0;

  state = {
    randomString: "",
    activeSubString: 0,
    finished: false
  }

  componentDidMount() {
    GetRequest().then((response) => {
      console.log(response.data.text_out);
      let textOut = response.data.text_out.replace(/<\/p>\r<p>/g, '');
      textOut = textOut.replace(/<\/p>/g, '');
      textOut = textOut.replace(/<p>/g, '');

      this.randSplitted = textOut.split(" ");

      let timer = setInterval(() => {
        this.countDown++
        this.setState({timer: this.countDown})
        if(this.countDown == 30) {
          clearInterval(timer);
          this.setState({finished: true})
        }
       }, 1000);


      this.setState({randomString: textOut})
    }).catch((error) => {
      console.error(error);
    })
  }

  keypressHandler = (event) => {
    console.log(this.rand_string.value);

    if(event.target.value.substring(0, event.target.value.length) == this.randSplitted[this.state.activeSubString].substring(0, event.target.value.length)) {
      let subStrRandSplitted = this.randSplitted[this.state.activeSubString].substring(0, this.randSplitted[this.state.activeSubString].length);
      this.setState({activeStringClass: 'string-active'});
    }
    else {
      this.setState({activeStringClass: 'string-deactive'});
    }

    if(event.target.value == this.randSplitted[this.state.activeSubString]) {
      let subStrRandSplitted = this.randSplitted[this.state.activeSubString].substring(0, this.randSplitted[0].length);

      if(event.charCode === 32) {
        this.count++;
        this.setState({activeSubString: this.count})
        this.rand_string.value = "";
      }
    }
  }

  render() {

    return (<Layout>
      {!this.state.finished ?
        <div>
      <div className="container my-5">
        <div className={this.state.activeStringClass}>{this.state.randomString}</div><br />
        <p>Timer: {this.state.timer}</p>
      </div>
      <div className="container">
        <input type="text" ref={el => this.rand_string = el} name="random_string" onKeyPress={this.keypressHandler} />
      </div></div>
      : <div className="container my-5">
        <div>Correct words: {this.count}</div>
      </div>
    }
    </Layout>)
  }
}

export default MainComponent;
