import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import BottomNavigationItem from './BottomNavigationItem';

export const BottomNavContext = React.createContext();

class BottomNavigation extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    actionItems: PropTypes.array,
    showLabels: PropTypes.bool,
    handleChange: PropTypes.func,
    value: PropTypes.string,
  };

  state = {
    backgroundColor: '#2196f3',
  };

  handleChange = (value, backgroundColor) => {
    const { handleChange } = this.props;
    handleChange(value);
    this.setState({ backgroundColor: backgroundColor });
  };

  _renderActionItems() {
    const { backgroundColor, actionItems, showLabels } = this.props;
    const backgroundColorActual = backgroundColor ? backgroundColor : '#2196f3';

    return (
      <BottomNavContext.Provider
        value={{ backgroundColor: backgroundColorActual }}>
        {actionItems.map((item, index) => {
          if (item.label && item.label.length > 0) {
            return (
              <BottomNavigationItem
                icon={item.icon}
                label={item.label}
                showLabel={showLabels || item.showLabel}
                onPress={item.onPress}
                handleChange={this.handleChange}
                value={index || index === 0 ? index : item.value}
                showLabels={this.props.showLabels}
                active={index === this.props.value}
              />
            );
          } else {
            return React.cloneElement(item, {
              handleChange: this.handleChange,
              value: index,
              showLabels: this.props.showLabels,
              active: index === this.props.value,
            });
          }
        })}
      </BottomNavContext.Provider>
    );
  }

  _renderChilren() {
    const { children, backgroundColor } = this.props;
    const backgroundColorActual = backgroundColor ? backgroundColor : '#2196f3';
    const childrenProp = React.Children.map(children, (child, childIndex) => {
      return React.cloneElement(child, {
        handleChange: this.handleChange,
        value: childIndex,
        showLabels: this.props.showLabels,
        active: childIndex === this.props.value,
      });
    });

    return (
      <BottomNavContext.Provider
        value={{ backgroundColor: backgroundColorActual }}>
        {childrenProp}
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
        {children ? this._renderChilren() : this._renderActionItems()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavigation: {
    height: 56,
    flexDirection: 'row',
  },
});

export default withTheme(BottomNavigation);
