import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  };

  _renderText() {
    const { text } = this.props;

    return <BodyText style={styles.listText}>{text}</BodyText>;
  }

  render() {
    const { style, onPress, disabled, selected, children } = this.props;
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
        {children ? children : this._renderText()}
      </Ripple>
    );
  }
}

export default withTheme(ListItem);
