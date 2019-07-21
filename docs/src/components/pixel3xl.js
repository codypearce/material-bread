import React from 'react';
import PropTypes from 'prop-types';

function Pixel3xl({ animated, width, height, style, children }) {
  return (
    <div style={{ height: 550 }}>
      <div className="">
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
          <div className="pixel__roundedscreen" />
        </div>
      </div>
    </div>
  );
}

Pixel3xl.propTypes = {
  animated: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};
export default Pixel3xl;
