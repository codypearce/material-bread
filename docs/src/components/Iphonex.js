import React from 'react';
import PropTypes from 'prop-types';

function IphoneX({ animated, width, height, style, children }) {
  return (
    <div className="" style={{ height: 550 }}>
      <div className="iphonex">
        <div className="iphonex__case">
          <div className="iphonex__top">
            <div className="iphonex__time">10:30</div>

            <i className="fa fa-wifi iphonex__wifi" />
            <i className="fa fa-battery-quarter iphonex__battery" />
          </div>
          <div className="iphonex__notch">
            <div className="iphonex__speaker" />
            <div className="iphonex__camera" />
          </div>
          <div className="iphonex__screen">{children}</div>
        </div>

        <div className="iphonex__power" />
        <div className="iphonex__volume iphonex__volume--up" />
        <div className="iphonex__volume iphonex__volume--down" />
      </div>
    </div>
  );
}

IphoneX.propTypes = {
  animated: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};
export default IphoneX;
