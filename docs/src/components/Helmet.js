import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class HemletHelper extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
  };

  render() {
    const { title, description, keywords } = this.props;
    return (
      <Helmet>
        <title>{title} | Material Bread </title>
        <meta
          name="description"
          content={
            description ||
            'Highly Customizable React Native Material Design Components'
          }
        />
        <meta
          name="keywords"
          content={keywords || 'react react native material design components'}
        />
      </Helmet>
    );
  }
}

export default HemletHelper;
