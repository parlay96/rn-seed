/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let YpIconToolbar12: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 85.333333H384a128 128 0 0 0-128 128v170.666667h512V213.333333a128 128 0 0 0-128-128z m0 85.333334l4.992 0.298666A42.666667 42.666667 0 0 1 682.666667 213.333333v85.333334H341.333333V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M170.666667 298.666667h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v469.333333a85.333333 85.333333 0 0 1-85.333334 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V384a85.333333 85.333333 0 0 1 85.333334-85.333333z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M341.333333 469.333333h341.333334a42.666667 42.666667 0 0 1 0 85.333334H341.333333a42.666667 42.666667 0 0 1 0-85.333334z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar12.defaultProps = {
  size: 18,
};

YpIconToolbar12 = React.memo ? React.memo(YpIconToolbar12) : YpIconToolbar12;

export default YpIconToolbar12;
