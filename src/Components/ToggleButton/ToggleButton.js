import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Icon from './../Icon';
import Ripple from '../../Abstract/Ripple';

import { ToggleButtonContext } from './ToggleButtonGroup';

class ToggleButton extends Component {
  static propTypes = {
    style: PropTypes.object,
    active: PropTypes.bool,
    icon: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    size: PropTypes.number,
    value: PropTypes.string,
  };
  state = {
    isActive: false,
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
    const { style, icon, color, size, value } = this.props;
    const { isActive } = this.state;

    return (
      <ToggleButtonContext.Consumer>
        {context => (
          <Ripple
            rippleContainerBorderRadius={100}
            rippleColor={color ? color : 'rgb(0, 0, 0)'}
            onPress={() => {
              if (context) {
                context.updateActive(value);
              } else {
                this.handleToggle();
              }
            }}
            style={{
              height: size * 1.2,
              width: size * 1.2,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: isActive || context.active == value ? 1 : 0.4,
            }}>
            <Icon
              name={icon}
              color={color}
              size={size}
              style={[{ backgroundColor: 'transparent' }, style]}
            />
          </Ripple>
        )}
      </ToggleButtonContext.Consumer>
    );
  }
}

export default withTheme(ToggleButton);
