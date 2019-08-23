import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import withTheme from '../../Theme/withTheme';

class Icon extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.number,
    name: PropTypes.string,
    testID: PropTypes.string,
    iconComponent: PropTypes.func,
  };
  render() {
    const {
      style,
      name,
      color,
      size,
      testID,
      iconComponent,
      ...rest
    } = this.props;

    const IconComponent = iconComponent || MaterialIcons;

    return (
      <IconComponent
        pointerEvents="none"
        name={name}
        color={color}
        size={size}
        style={[{ backgroundColor: 'transparent' }, style]}
        testID={testID}
        {...rest}
      />
    );
  }
}

export default withTheme(Icon);
