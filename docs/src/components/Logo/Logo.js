import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/Logo.css';

function Logo({ animated, width, height, style }) {
  return (
    <svg
      width={width ? width : '387.502'}
      height={height ? height : '320.398'}
      viewBox="0 0 363.28359 300.3731"
      id="svg5967"
      style={{
        filter: 'drop-shadow(rgba(0, 0, 0, 0.3) 6px 6px 8px)',
        ...style,
      }}
      className={`Logo ${animated ? 'Logo--animated' : ''}`}>
      <g id="layer1" transform="translate(26.837 -286.146)">
        <g
          id="g4186"
          color="#000"
          fontWeight="400"
          fontFamily="Open Sans"
          letterSpacing="0"
          wordSpacing="0"
          fillRule="evenodd">
          <path
            d="m 154.92453,347.02574 -7.48868,-4.9532 -15.7818,-9.9066 -31.56367,-19.8132 -74.9862,23.0455 -24.31982983,68.45971 23.30650983,66.5185 0,115.6424 69.56348,0 34.78159,0 17.39095,0 9.09765,0 z"
            id="rect4160-1-5-8-49-1-6"
            overflow="visible"
            fill="#dcd09d"
            stroke="#dcd09d"
            className={`Logo__middle Logo__middle--1 `}
          />
          <path
            d="m 154.68318,586.01885 9.09765,0 17.39095,0 34.78172,0 69.56334,0 0,-115.6424 23.30657,-66.5185 -24.31985,-68.45971 -74.98621,-23.0455 -31.56369,19.8132 -15.7818,9.9066 -7.48868,4.9532 z"
            id="path4882-6-1"
            overflow="visible"
            fill="#dac589"
            stroke="#dac589"
            className="Logo__middle Logo__middle--2"
          />
          <path
            id="path4930-1-5"
            d="m 311.29316,473.99195 0,112.0266 -42.01706,0 0,-114.7336 z"
            overflow="visible"
            fill="#bd986f"
            stroke="#bd986f"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--10"
          />
          <path
            id="path4928-1-0"
            d="m 335.94619,396.40095 -24.65303,77.591 -42.01706,-2.7071 21.18385,-65.3275 z"
            overflow="visible"
            fill="#a9845b"
            stroke="#a9845b"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--9"
          />
          <path
            id="path4926-2-2"
            d="m 303.4691,313.61814 32.47709,82.78281 -45.48624,9.5559 -19.09121,-56.37941 z"
            overflow="visible"
            fill="#8f6a41"
            stroke="#8f6a41"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--8"
          />
          <path
            id="path4924-1-9"
            d="m 215.99198,286.64574 87.47712,26.9724 -32.10036,35.9596 -53.85116,-16.6967 z"
            overflow="visible"
            fill="#7a552c"
            stroke="#7a552c"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--7"
          />
          <path
            id="path4930-5-6-3"
            d="m -1.6844798,473.99195 0,112.0266 42.0170598,0 0,-114.7336 z"
            overflow="visible"
            fill="#d0ab82"
            stroke="#d0ab82"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--1"
          />
          <path
            id="path4928-7-9-9"
            d="m -26.33744,396.40095 24.6529602,77.591 42.0170598,-2.7071 -21.18385,-65.3275 z"
            overflow="visible"
            fill="#bd986f"
            stroke="#bd986f"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--2"
          />
          <path
            id="path4926-7-9-6"
            d="m 6.1395802,313.61814 -32.4770202,82.78281 45.48617,9.5559 19.09121,-56.37941 z"
            overflow="visible"
            fill="#a9845b"
            stroke="#a9845b"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--3"
          />
          <path
            id="path4924-5-4-7"
            d="M 93.6167,286.64574 6.1395802,313.61814 38.23994,349.57774 92.0911,332.88104 Z"
            overflow="visible"
            fill="#8f6a41"
            stroke="#8f6a41"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--4"
          />
          <path
            id="rect4160-1-5-8-6-0-2"
            d="m 92.0911,332.88104 62.83343,39.71811 0,-45.41961 -61.30783,-40.5338 z"
            overflow="visible"
            fill="#7a552c"
            stroke="#7a552c"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--5"
          />
          <path
            id="rect4160-1-5-8-2-4"
            d="m 217.51758,332.88104 -62.83345,39.71811 0,-45.41961 61.30785,-40.5338 z"
            overflow="visible"
            fill="#694423"
            stroke="#694423"
            strokeLinejoin="round"
            className="Logo__crust Logo__crust--6"
          />
        </g>
      </g>
    </svg>
  );
}

Logo.propTypes = {
  animated: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};
export default Logo;
