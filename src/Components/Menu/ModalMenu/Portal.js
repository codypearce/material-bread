import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool,
  };

  state = {
    el: null,
    target: null,
  };

  componentDidMount() {
    const container = document.createElement('div');
    if (typeof document == `undefined`) {
      return;
    }

    this.setState({ el: container, target: document.body }, () => {
      this.state.target.appendChild(this.state.el);
    });
  }

  componentWillUnmount() {
    this.state.target && this.state.target.removeChild(this.state.el);
  }

  render() {
    const { children } = this.props;

    if (this.state.el) {
      return ReactDOM.createPortal(children, this.state.el);
    }

    return null;
  }
}
