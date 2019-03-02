import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Icon from '../Icon';
import Ripple from '../../Abstract/Ripple';

import { BottomNavContext } from './BottomNavigation';

class BottomNavigationItem extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    icon: PropTypes.string,
    title: PropTypes.string,
  };

  _renderText(containerColor) {
    let color = 'white';

    if (containerColor == 'white' || containerColor == '#fff')
      color = '#2196f3';

    const { title } = this.props;
    return <Text style={{ color: color, fontSize: 12 }}>{title}</Text>;
  }

  _handleIconColor(containerColor) {
    if (containerColor == 'white' || containerColor == '#fff') {
      return '#2196f3';
    } else {
      return 'white';
    }
  }

  render() {
    const { active, icon, title } = this.props;

    return (
      <BottomNavContext.Consumer>
        {context => (
          <Ripple
            style={[
              styles.bottomNavigationItem,
              { opacity: active ? 1 : 0.6 },
            ]}>
            <Icon
              name={icon}
              size={24}
              color={this._handleIconColor(context.backgroundColor)}
            />
            {title ? this._renderText(context.backgroundColor) : null}
          </Ripple>
        )}
      </BottomNavContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavigationItem: {
    minWidth: 80,
    maxWidth: 168,
    height: 56,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default withTheme(BottomNavigationItem);
