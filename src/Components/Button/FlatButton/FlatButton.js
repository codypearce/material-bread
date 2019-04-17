import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';

import ButtonBase from '../ButtonBase/ButtonBase';
import { Hoverable } from '../../../';
import color from 'color';

class FlatButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    color: PropTypes.string,
    textColor: PropTypes.string,
    rippleColor: PropTypes.string,
    theme: PropTypes.object,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  };
  state = {
    stateBackgroundColor: null,
  };

  getButtonStyles() {
    const { theme } = this.props;

    const buttonStyles = {
      ...theme.containedButton,
      backgroundColor: this.getBackgroundColor(),
    };

    return buttonStyles;
  }

  getBackgroundColor() {
    const { color: userColor, disabled, theme } = this.props;
    const { stateBackgroundColor } = this.state;

    let backgroundColor = userColor ? userColor : theme.primary.main;

    backgroundColor = disabled ? 'rgba(0, 0, 0, 0.12)' : backgroundColor;

    return stateBackgroundColor ? stateBackgroundColor : backgroundColor;
  }

  getRippleColor() {
    const { rippleColor } = this.props;

    let implementedRippleColor = 'rgba(255, 255,255, 0.56)';

    return rippleColor ? rippleColor : implementedRippleColor;
  }

  getTextColor() {
    const { textColor, disabled } = this.props;

    let implementedTextColor = disabled ? 'rgba(0, 0, 0, 0.26)' : 'white';
    if (textColor) implementedTextColor = textColor;

    return implementedTextColor;
  }

  handleHover(toggle) {
    let implementedColor = toggle
      ? color(this.getBackgroundColor())
          .darken(0.15)
          .rgb()
          .string()
      : null;

    this.setState({ stateBackgroundColor: implementedColor });
  }
  render() {
    const { ...props } = this.props;

    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        {() => (
          <ButtonBase
            typeRippleColor={this.getRippleColor()}
            typeTextColor={this.getTextColor()}
            typeButtonStyles={this.getButtonStyles()}
            {...props}
          />
        )}
      </Hoverable>
    );
  }
}

export default withTheme(FlatButton);
