import React from 'react';
import PropTypes from 'prop-types';

import { Dimensions } from 'react-native';
import Svg, { G, Path, Rect } from 'react-native-svg';

const AppbarBottomSVG = ({
  paddingHorizontal,
  width,
  backgroundColor,
  fabPosition,
}) => {
  if (!width) {
    width = Dimensions.get('screen').width - paddingHorizontal;
  }

  const widthOfPath = 92;

  let rectWidth = width / 2 - widthOfPath / 2;
  let middlePosition = width / 2 - widthOfPath / 2;
  let rightPosition = width / 2 + widthOfPath / 2;

  if (fabPosition == 'end') {
    rectWidth = width - widthOfPath;
    middlePosition = width - widthOfPath;
  }

  return (
    <Svg width={'100%'} height={56} style={{ position: 'absolute' }}>
      <Rect
        height={56}
        width={rectWidth + 1}
        fill={backgroundColor}
        x={0}
        y={0}
      />
      <G x={middlePosition}>
        <Path
          fill={backgroundColor}
          d="M0 0v56h92V0h-7.125c-1.662 0-3 1.338-3 3h-.025C80.29 21.644 64.71 35.987 46 36c-18.711-.011-34.294-14.354-35.854-33h-.033c0-1.662-1.338-3-3-3H0z"
          fillRule="evenodd"
        />
      </G>
      {fabPosition == 'end' ? null : (
        <Rect
          height={56}
          width={rectWidth + 1}
          fill={backgroundColor}
          x={rightPosition - 1}
          y={0}
        />
      )}
    </Svg>
  );
};

AppbarBottomSVG.propTypes = {
  paddingHorizontal: PropTypes.number,
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  fabPosition: PropTypes.string,
};

export default AppbarBottomSVG;
