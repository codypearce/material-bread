import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import { Checkbox, Hoverable } from '../../../';
import styles from './DataTableRow.styles';

class DataTableRow extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    borderBottomColor: PropTypes.string,
    selected: PropTypes.bool,
    onPressCheckbox: PropTypes.func,
    showCheckbox: PropTypes.bool,
    checkboxOffset: PropTypes.bool,
    onPress: PropTypes.func,
    hover: PropTypes.bool,
    type: PropTypes.string,
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
      onPressCheckbox,
      showCheckbox,
      hover,
      checkboxOffset,
    } = this.props;
    const { backgroundColor } = this.state;

    let color = hover ? backgroundColor : 'transparent';

    if (selected) color = 'rgba(0, 0, 0, 0.04)';

    return (
      <TouchableWithoutFeedback
        onPress={showCheckbox ? onPressCheckbox : onPress}
        disabled={!onPressCheckbox && !onPress}>
        <View
          style={[
            styles.container,
            {
              borderBottomColor,
              backgroundColor: color,
            },
            style,
          ]}>
          {showCheckbox ? (
            <Checkbox
              checked={selected}
              onPress={onPressCheckbox}
              size={24}
              style={{ marginRight: 12 }}
            />
          ) : null}
          {checkboxOffset ? <View style={styles.checkboxOffset} /> : null}
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
