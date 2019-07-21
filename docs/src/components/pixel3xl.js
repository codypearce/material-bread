import React from 'react';
import PropTypes from 'prop-types';

function Pixel3xl({ children }) {
  return (
    <div className="pixel">
      <div className="pixel__notch--background" />
      <div className="pixel__notch--hole--left" />
      <div className="pixel__notch--hole--right" />
      <div className="pixel__notch--fill" />
      <div className="pixel__notch">
        <div className="pixel__camera--left" />
        <div className="pixel__camera--right" />
        <div className="pixel__speaker--top" />
      </div>
      <div className="pixel__screen">{children}</div>
      <div className="pixel__chin">
        <div className="pixel__speaker--bottom" />
      </div>
    </div>
  );
}

Pixel3xl.propTypes = {
  children: PropTypes.node,
};
export default Pixel3xl;
