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
    // container.style.position = 'fixed';
    // container.style.top = 0;
    // container.style.left = 0;
    // container.style.right = 0;
    // container.style.bottom = 0;

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
