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

let YpIconMapJzdw: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 42.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v45.013334A384.170667 384.170667 0 0 1 893.696 469.333333H938.666667a42.666667 42.666667 0 0 1 0 85.333334h-45.013334a384.170667 384.170667 0 0 1-338.944 338.986666L554.666667 938.666667a42.666667 42.666667 0 0 1-85.333334 0v-45.013334a384.170667 384.170667 0 0 1-338.986666-338.944L85.333333 554.666667a42.666667 42.666667 0 0 1 0-85.333334h45.013334A384.170667 384.170667 0 0 1 469.333333 130.346667V85.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z m0 170.666666a298.666667 298.666667 0 1 0 0 597.333334 298.666667 298.666667 0 0 0 0-597.333334z m0 170.666667a128 128 0 1 1 0 256 128 128 0 0 1 0-256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconMapJzdw.defaultProps = {
  size: 18,
};

YpIconMapJzdw = React.memo ? React.memo(YpIconMapJzdw) : YpIconMapJzdw;

export default YpIconMapJzdw;
