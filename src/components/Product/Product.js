import React, {Component} from 'react';

import Layout from '../../hoc/Layout/Layout';
import {GetRequest} from '../../services/ApiServices';

class Product extends Component {

  state = {}

  componentDidMount() {
    let product = {}
    GetRequest('products.json').then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    })
  }

  render() {

    return (<Layout>
      <div className="container">
        <div className="card my-5">
          <div className="card-body">
            <div className="row ">
              Hello
            </div>
          </div>
        </div>
      </div>
    </Layout>)
  }
}

export default Product;
