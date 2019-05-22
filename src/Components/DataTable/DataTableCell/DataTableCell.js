import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import { Icon } from '../../../';
import styles from './DataTableCell.styles';

class TableCell extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    right: PropTypes.bool,
    borderRight: PropTypes.bool,
    borderLeft: PropTypes.bool,
    minWidth: PropTypes.number,
    text: PropTypes.string,
    onPress: PropTypes.func,
    type: PropTypes.string,
    sortingIcon: PropTypes.string,
    relativeWidth: PropTypes.number,
  };
  static defaultProps = {
    relativeWidth: 1,
    minWidth: 100,
  };

  state = {
    roateIcon: new Animated.Value(0),
  };

  componentDidUpdate(prevProps) {
    const { sortingIcon } = this.props;
    if (sortingIcon == 'up' && prevProps.sortingIcon == 'down') {
      this.animateSortingIcon('up');
    } else if (sortingIcon == 'down' && prevProps.sortingIcon == 'up') {
      this.animateSortingIcon('down');
    }
  }

  animateSortingIcon(type) {
    const value = type == 'up' ? 1 : 0;
    Animated.timing(this.state.roateIcon, {
      toValue: value,
      duration: 200,
    }).start();
  }

  _renderSortingIcon() {
    return (
      <Animated.View
        style={{
          transform: [
            {
              rotate: this.state.roateIcon.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        }}>
        <Icon name={'arrow-downward'} size={18} style={styles.sortingIcon} />
      </Animated.View>
    );
  }

  _renderText() {
    const { text, type, sortingIcon } = this.props;
    const style = type == 'header' ? styles.textHeader : styles.text;
    let color = type == 'header' ? 'rgba(0,0,0,.54)' : 'rgba(0,0,0,.87)';
    if (sortingIcon == 'down' || sortingIcon == 'up') color = 'black';

    return <Text style={[style, { color }]}>{text}</Text>;
  }
  render() {
    const {
      children,
      style,
      right,
      borderRight,
      borderLeft,
      onPress,
      sortingIcon,
      minWidth,
      relativeWidth,
    } = this.props;

    const minWidthImplemented = minWidth + minWidth * (relativeWidth - 1);

    const platformStyles = Platform.OS == 'web' ? {} : {};

    return (
      <TouchableWithoutFeedback
        disabled={!onPress}
        onPress={onPress}
        style={{ flex: 1 }}>
        <View
          style={[
            styles.dataTableItem,
            {
              flex: 1,
              justifyContent: right ? 'flex-end' : 'flex-start',
              borderRightWidth: borderRight ? 1 : 0,
              borderLeftWidth: borderLeft ? 1 : 0,
              minHeight: 25,
              minWidth: minWidthImplemented,
              flexWrap: 'wrap',
            },
            platformStyles,
            style,
          ]}>
          {sortingIcon ? this._renderSortingIcon() : null}
          {children ? children : this._renderText()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withTheme(TableCell);
