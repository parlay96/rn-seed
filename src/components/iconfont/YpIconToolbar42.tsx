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

let YpIconToolbar42: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M170.666667 128h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v512a85.333333 85.333333 0 0 1-85.333334 85.333334h-156.458666a42.666667 42.666667 0 0 0-25.6 8.533333L537.6 919.466667a42.666667 42.666667 0 0 1-51.2 0L352.725333 819.2a42.666667 42.666667 0 0 0-25.6-8.533333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V213.333333a85.333333 85.333333 0 0 1 85.333334-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M341.333333 384a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667zM512 341.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v170.666667a42.666667 42.666667 0 0 1-85.333334 0V384a42.666667 42.666667 0 0 1 42.666667-42.666667zM682.666667 384a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar42.defaultProps = {
  size: 18,
};

YpIconToolbar42 = React.memo ? React.memo(YpIconToolbar42) : YpIconToolbar42;

export default YpIconToolbar42;
