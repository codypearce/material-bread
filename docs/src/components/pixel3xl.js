import React from 'react';
import PropTypes from 'prop-types';

function Pixel3xl({ animated, width, height, style, children }) {
  return (
    <svg
      id="svg11071"
      xmlns="http://www.w3.org/2000/svg"
      height="1580"
      width="770"
      version="1.1"
      viewBox="0 0 770.00001 1580">
      <g id="layer3">
        <path
          id="path11635"
          d="m766 366v100"
          stroke="#f80"
          strokeWidth="9"
          fill="none"
        />
        <path
          id="path11637"
          d="m766 768v-200"
          stroke="#888"
          strokeWidth="9"
          fill="none"
        />
        <g fillRule="evenodd">
          <rect
            id="rect11633"
            rx="80"
            ry="80"
            height="1580"
            width="767"
            y="0"
            x="0"
            fill="#222"
          />
          <rect
            id="rect11061"
            fillOpacity=".13333"
            rx="5"
            ry="5"
            height="18"
            width="80"
            y="80"
            x="343.5"
            fill="#fff"
          />
          <circle
            id="path11063"
            cx="459"
            fillOpacity=".26667"
            cy="76.25"
            r="15"
            fill="#00f"
          />
          <circle
            id="path11069"
            cx="297.25"
            fillOpacity=".26667"
            cy="74"
            r="17.5"
            fill="#00f"
          />
        </g>
        <g fillRule="evenodd" fill="#fff">
          <rect
            id="rect11705"
            fillOpacity=".13333"
            rx="10"
            ry="10"
            height="25"
            width="50"
            y="34"
            x="358.5"
          />
          <rect
            id="rect11707"
            fillOpacity=".13333"
            rx="5"
            ry="5"
            height="15"
            width="220"
            y="1526"
            x="273.5"
          />
          <path
            id="path11722"
            d="m83.5 38c-27.7 0-50 22.3-50 50v1360c0 16.62 13.38 30 30 30h640c16.62 0 30-13.38 30-30v-1360c0-27.7-22.3-50-50-50h-90-50c-19.39 0-35 15.61-35 35v4c0 24.93-20.07 45-45 45h-160c-24.93 0-45-20.07-45-45v-4c0-19.39-15.61-35-35-35h-70z"
            fillOpacity=".86667"
          />
        </g>
      </g>
    </svg>
  );
}

Pixel3xl.propTypes = {
  animated: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};
export default Pixel3xl;
