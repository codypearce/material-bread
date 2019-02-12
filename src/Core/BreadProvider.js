import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from '../Components/Portal';
import ThemeContext from '../Theme/ThemeContext';

export default class BreadProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    const { children } = this.props;
    return (
      <Portal.Provider>
        <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
      </Portal.Provider>
    );
  }
}
