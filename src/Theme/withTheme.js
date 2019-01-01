import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import mergeTheme from './mergeTheme';
import defaultTheme from './defaultTheme';

function withTheme(Component) {
  return class extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => {
            return <Component theme={mergeTheme(theme)} {...this.props} />;
          }}
        </ThemeContext.Consumer>
      );
    }
  };
}

export default withTheme;
