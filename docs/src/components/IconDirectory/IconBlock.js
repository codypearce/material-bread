import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Icon, Ripple, Hoverable } from '../../../../src/index';

export default class IconBlock extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string,
  };

  state = {
    backgroundColor: 'rgba(0,0,0,0)',
  };

  handleHover(toggle) {
    this.setState({
      backgroundColor: toggle ? 'rgba(0,0,0,.18)' : 'rgba(0,0,0,0)',
    });
  }

  copyToClipboard = () => {
    var textField = document.createElement('textarea');
    textField.innerHTML = this.props.name;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  render() {
    const { name } = this.props;
    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}
        key={name}>
        {() => (
          <Ripple
            rippleContainerBorderRadius={6}
            style={[
              styles.iconBlock,
              { backgroundColor: this.state.backgroundColor },
            ]}
            onClick={this.copyToClipboard}>
            <Icon
              name={name}
              color={'rgba(0,0,0,.87)'}
              size={48}
              style={styles.icon}
            />
            <Text style={styles.iconName}>{name}</Text>
          </Ripple>
        )}
      </Hoverable>
    );
  }
}

const styles = {
  iconBlock: {
    display: 'flex',
    flexDirection: 'column',
    width: 116,
    height: 116,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 16,
  },
  iconName: {
    fontSize: 12,
    color: 'rgba(0,0,0,.6)',
    textAlign: 'center',
  },
};
