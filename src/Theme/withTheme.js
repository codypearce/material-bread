import React from 'react';
import ThemeContext from './ThemeContext';
import mergeTheme from './mergeTheme';

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
