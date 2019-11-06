import React from 'react';
import ThemeContext from './ThemeContext';
import mergeTheme from './mergeTheme';

function withTheme(Component) {
  class ThemeComponent extends React.Component {
    render() {
      const { forwardedRef, ...rest } = this.props;
      return (
        <ThemeContext.Consumer>
          {theme => {
            return (
              <Component
                ref={forwardedRef}
                theme={mergeTheme(theme)}
                {...rest}
              />
            );
          }}
        </ThemeContext.Consumer>
      );
    }
  }
  return React.forwardRef((props, ref) => {
    return <ThemeComponent {...props} forwardedRef={ref} />;
  });
}

export default withTheme;
