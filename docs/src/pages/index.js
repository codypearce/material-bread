import React from 'react';

import Layout from '../components/Layout/Layout';
import { Button } from '@material-ui/core';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1 className="Home__Title">Material Bread</h1>
      <h4 className="Home__subtitle">
        React Native Material Design Components
      </h4>

      <div className="row center-xs" style={{ marginTop: 40 }}>
        <Button variant="outlined" color="primary">
          Get Started
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: 16, marginRight: 16 }}>
          Playground
        </Button>

        <Button variant="outlined" color="default">
          Github
        </Button>
      </div>
    </Layout>
  );
};

export default IndexPage;
