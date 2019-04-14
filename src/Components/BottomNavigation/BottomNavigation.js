import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import withTheme from '../../Theme/withTheme';
import BottomNavigationItem from './BottomNavigationItem/BottomNavigationItem';
import styles from './BottomNavigation.styles';

export const BottomNavContext = React.createContext();

class BottomNavigation extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    actionItems: PropTypes.array,
    showLabels: PropTypes.bool,
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  state = {
    backgroundColor: '#2196f3',
  };

  handleInternalChange = (value, backgroundColor) => {
    const { handleChange } = this.props;
    if (handleChange) handleChange(value);
    this.setState({ backgroundColor: backgroundColor });
  };

  _renderActionItems() {
    const { backgroundColor, actionItems, showLabels } = this.props;
    const backgroundColorActual = backgroundColor ? backgroundColor : '#2196f3';

    return (
      <BottomNavContext.Provider
        value={{ backgroundColor: backgroundColorActual }}>
        {actionItems.map((item, index) => {
          if (!item.props) {
            return (
              <BottomNavigationItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                showLabel={showLabels || item.showLabel}
                onPress={item.onPress}
                handleChange={this.handleInternalChange}
                value={index || index === 0 ? index : item.value}
                showLabels={this.props.showLabels}
                active={index === this.props.value}
              />
            );
          } else {
            return React.cloneElement(item, {
              key: item.label,
              handleChange: item.props.handleChange
                ? item.props.handleChange
                : this.handleInternalChange,
              value: item.props.value ? item.props.value : index,
              showLabels: this.props.showLabels,
              active: item.props.active
                ? item.props.active
                : index === this.props.value,
            });
          }
        })}
      </BottomNavContext.Provider>
    );
  }

  render() {
    const { children, backgroundColor, style } = this.props;

    const backgroundColorActual = backgroundColor ? backgroundColor : '#2196f3';

    return (
      <View
        style={[
          styles.bottomNavigation,
          {
            backgroundColor: backgroundColorActual,
          },
          style,
        ]}>
        {children ? children : this._renderActionItems()}
      </View>
    );
  }
}

export default withTheme(BottomNavigation);
