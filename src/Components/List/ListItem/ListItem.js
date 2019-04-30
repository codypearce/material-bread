import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import withTheme from '../../../Theme/withTheme';
import { BodyText, Ripple } from '../../..';
import styles from './ListItem.styles';

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    text: PropTypes.string,
    media: PropTypes.node,
    icon: PropTypes.node,
  };

  _renderText() {
    const { text } = this.props;

    return <BodyText style={styles.listText}>{text}</BodyText>;
  }

  _renderIcon() {
    const { icon } = this.props;
    console.log(icon);
    return React.cloneElement(icon, {
      size: icon.props.size ? icon.props.size : 16,
      color: icon.props.color ? icon.props.color : '#6e6e6e',
    });
  }

  render() {
    const {
      style,
      onPress,
      disabled,
      selected,
      children,
      media,
      icon,
    } = this.props;

    let contentMargin = media ? 16 : 0;
    if (icon) contentMargin = 32;

    return (
      <Ripple
        onAnimationEnd={onPress}
        rippleDuration={200}
        disabled={disabled}
        rippleColor={'rgba(0,0,0,.8)'}
        style={[
          {
            backgroundColor: selected ? '#eee' : '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingVertical: 12,
            width: '100%',
            zIndex: 1,
          },
          style,
        ]}>
        {icon ? this._renderIcon() : null}
        {media ? media : null}
        <View style={{ marginLeft: contentMargin }}>
          {children ? children : this._renderText()}
        </View>
      </Ripple>
    );
  }
}

export default withTheme(ListItem);
