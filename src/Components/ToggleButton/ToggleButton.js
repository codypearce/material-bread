import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Ripple from '../Ripple/Ripple';

import { ToggleButtonContext } from './ToggleButtonGroup/ToggleButtonGroup';

class ToggleButton extends Component {
  static propTypes = {
    style: PropTypes.object,
    active: PropTypes.bool,
    onPress: PropTypes.func,
    value: PropTypes.string,
    activeNode: PropTypes.node,
    inActiveNode: PropTypes.node,
    rippleColor: PropTypes.string,
    size: PropTypes.number,
    rippleContainerBorderRadius: PropTypes.number,
  };
  state = {
    isActive: false,
  };

  static defaultProps = {
    size: 30,
  };

  componentDidMount() {
    const { active } = this.props;
    if (active) {
      this.setState({ isActive: true });
    }
  }
  componentDidUpdate(prevProps) {
    const { active } = this.props;

    if (active != prevProps.active) {
      this.setState({ isActive: active });
    }
  }

  handleToggle() {
    const { onPress } = this.props;
    const { isActive } = this.state;

    this.setState({ isActive: !isActive });
    if (onPress) onPress();
  }

  render() {
    const {
      style,
      size,
      rippleColor,
      value,
      activeNode,
      inActiveNode,
      rippleContainerBorderRadius,
    } = this.props;
    const { isActive } = this.state;

    return (
      <ToggleButtonContext.Consumer>
        {context => (
          <Ripple
            rippleContainerBorderRadius={
              rippleContainerBorderRadius || rippleContainerBorderRadius == 0
                ? rippleContainerBorderRadius
                : 100
            }
            rippleColor={rippleColor ? rippleColor : 'rgb(0, 0, 0)'}
            onPress={() => {
              if (context && context.updateActive) {
                return context.updateActive(value);
              } else {
                return this.handleToggle();
              }
            }}
            style={[
              style,
              {
                height: size * 1.2,
                width: size * 1.2,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            {isActive || context.active == value ? activeNode : inActiveNode}
          </Ripple>
        )}
      </ToggleButtonContext.Consumer>
    );
  }
}

export default withTheme(ToggleButton);
