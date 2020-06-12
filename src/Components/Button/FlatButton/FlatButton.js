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
    const bgColor = this.getBackgroundColor();

    let implementedRippleColor = this.getOverlayColor(bgColor, 0.12, 0.32);

    return rippleColor ? rippleColor : implementedRippleColor;
  }

  getTextColor() {
    const { textColor, disabled } = this.props;

    let implementedTextColor = disabled ? 'rgba(0, 0, 0, 0.26)' : 'white';
    if (textColor) implementedTextColor = textColor;

    return implementedTextColor;
  }

  getOverlayColor(bgColor, lightOverlay, darkOverlay) {
    let modifiedColor;

    if (color(bgColor).isDark()) {
      modifiedColor = color(bgColor)
        .lighten(darkOverlay)
        .rgb()
        .string();
    } else {
      modifiedColor = color(bgColor)
        .darken(lightOverlay)
        .rgb()
        .string();
    }
    return modifiedColor;
  }

  handleHover(toggle) {
    const bgColor = this.getBackgroundColor();
    let implementedColor = toggle
      ? this.getOverlayColor(bgColor, 0.08, 0.08)
      : null;

    this.setState({ stateBackgroundColor: implementedColor });
  }

  render() {
    const { containerStyle, ...props } = this.props;

    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}
        style={containerStyle}>
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
