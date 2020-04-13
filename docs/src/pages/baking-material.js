import React, { Component } from 'react';

import Prism from 'prismjs';
import {
  PageTitle,
  ComponentSubtitle,
  Section,
  ComponentDescription,
  Helmet,
} from '@components';

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'Baking Material Bread'} />
        <PageTitle>Baking Material Bread</PageTitle>
        <ComponentSubtitle
          description={'A series of articles about making Material Bread'}
        />
        <a style={{}}></a>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    paddingBottom: 60,
  },
  code: {},
};

export default Index;
