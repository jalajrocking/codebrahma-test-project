import React from 'react';

import Layout from '../../hoc/Layout/Layout';

const about = (props) => (<Layout>
  <div className="container">
    <div className="card my-5">
      <div className="card-body">
        <h5 className="card-title">About</h5>
        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p className="card-text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

      </div>
    </div>
  </div>
</Layout>)

export default about;
