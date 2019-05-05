import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import { Checkbox, Hoverable } from '../../../';
import styles from './DataTableRow.styles';

class DataTableRow extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    borderBottomColor: PropTypes.string,
    selected: PropTypes.bool,
    onPressCheckBox: PropTypes.func,
    showcheckBox: PropTypes.bool,
    onPress: PropTypes.func,
    hover: PropTypes.bool,
  };

  static defaultProps = {
    borderBottomColor: 'rgb(224, 224, 224)',
  };

  state = {
    backgroundColor: 'transparent',
  };

  _renderContent() {
    const {
      children,
      style,
      borderBottomColor,
      onPress,
      selected,
      onPressCheckBox,
      showcheckBox,
      hover,
    } = this.props;
    const { backgroundColor } = this.state;

    let color = hover ? backgroundColor : 'transparent';

    if (selected) color = 'rgba(0, 0, 0, 0.04)';

    return (
      <TouchableWithoutFeedback
        onPress={showcheckBox ? onPressCheckBox : onPress}
        disabled={!onPressCheckBox && !onPress}>
        <View
          style={[
            styles.container,
            {
              borderBottomColor,
              backgroundColor: color,
            },
            style,
          ]}>
          {showcheckBox ? (
            <Checkbox
              checked={selected}
              onPress={onPressCheckBox}
              size={24}
              style={{ marginRight: 12 }}
            />
          ) : null}
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const { hover } = this.props;

    if (hover) {
      return (
        <Hoverable
          onHoverIn={() =>
            this.setState({ backgroundColor: 'rgba(0, 0, 0, 0.04)' })
          }
          onHoverOut={() => this.setState({ backgroundColor: 'transparent' })}>
          {this._renderContent()}
        </Hoverable>
      );
    }

    return this._renderContent();
  }
}

export default withTheme(DataTableRow);
