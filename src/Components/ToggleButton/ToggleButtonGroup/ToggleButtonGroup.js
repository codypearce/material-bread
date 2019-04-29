import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';

export const ToggleButtonContext = React.createContext({
  updateActive: '',
  active: '',
});

class ToggleButtonGroup extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.node,
  };
  state = {
    active: '',
  };

  updateActive = value => {
    this.setState({ active: value });
    if (this.props.onPress) this.props.onPress();
  };

  render() {
    const { children } = this.props;
    return (
      <ToggleButtonContext.Provider
        value={{ updateActive: this.updateActive, active: this.state.active }}>
        {children}
      </ToggleButtonContext.Provider>
    );
  }
}

export default withTheme(ToggleButtonGroup);
