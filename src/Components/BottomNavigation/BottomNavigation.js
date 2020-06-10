import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import withTheme from '../../Theme/withTheme';
import BottomNavigationItem from './BottomNavigationItem/BottomNavigationItem.js';
import styles from './BottomNavigation.styles';

export const BottomNavContext = React.createContext();

class BottomNavigation extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    actionItems: PropTypes.array,
    showOneItem: PropTypes.bool,
    showLabels: PropTypes.bool,
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    horizontalWhenLandscape: PropTypes.bool,
    testID: PropTypes.string,
  };

  static defaultProps = {
    showOneItem: false,
    showLabels: true,
  };

  constructor(props) {
    super(props);

    const dimensions = Dimensions.get('window');
    const isLandscape = this.isOrientationLandscape(dimensions);
    const itemMaxWidth = this.getItemMaxWidth(isLandscape, dimensions);

    this.state = {
      backgroundColor: '#2196f3',
      isLandscape,
      itemMaxWidth,
    };
  }

  componentDidMount = () => {
    Dimensions.addEventListener('change', this.handleOrientationChange);
  };

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleOrientationChange);
  }

  getItemMaxWidth = (isLandscape, { height, width }) => {
    const { actionItems } = this.props;

    return (isLandscape ? height : width) / actionItems.length;
  };

  isOrientationLandscape = ({ width, height }) => width > height;

  handleOrientationChange = ({ window }) => {
    const isLandscape = this.isOrientationLandscape(window);
    const itemMaxWidth = this.getItemMaxWidth(isLandscape, window);
    this.setState({ isLandscape, itemMaxWidth });
  };

  handleInternalChange = (value, backgroundColor) => {
    const { handleChange } = this.props;
    if (handleChange) handleChange(value);
    this.setState({ backgroundColor: backgroundColor });
  };

  _renderActionItems() {
    const {
      backgroundColor,
      actionItems,
      showLabels,
      horizontalWhenLandscape,
    } = this.props;
    const { isLandscape, itemMaxWidth } = this.state;
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
                showOneItem={this.props.showOneItem}
                onPress={item.onPress}
                handleChange={this.handleInternalChange}
                value={index || index === 0 ? index : item.value}
                showLabel={showLabels}
                active={index === this.props.value}
                isLandscape={isLandscape}
                maxWidth={itemMaxWidth}
                horizontal={horizontalWhenLandscape}
              />
            );
          } else {
            return React.cloneElement(item, {
              key: item.label,
              handleChange: item.props.handleChange
                ? item.props.handleChange
                : this.handleInternalChange,
              value: item.props.value ? item.props.value : index,
              showLabel: this.props.showLabels,
              active: item.props.active
                ? item.props.active
                : index === this.props.value,
              isLandscape,
              maxWidth: itemMaxWidth,
              horizontal: horizontalWhenLandscape,
            });
          }
        })}
      </BottomNavContext.Provider>
    );
  }

  render() {
    const { children, backgroundColor, style, testID } = this.props;

    const backgroundColorActual = backgroundColor ? backgroundColor : '#2196f3';

    return (
      <View
        style={[
          styles.bottomNavigation,
          {
            backgroundColor: backgroundColorActual,
          },
          style,
        ]}
        testID={testID}>
        {children ? children : this._renderActionItems()}
      </View>
    );
  }
}

export default withTheme(BottomNavigation);
