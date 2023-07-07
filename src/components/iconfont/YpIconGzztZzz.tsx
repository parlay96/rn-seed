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

let YpIconGzztZzz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M682.666667 85.333333a170.666667 170.666667 0 0 1 170.453333 162.133334L853.333333 256v341.333333a85.333333 85.333333 0 0 1 85.333334 85.333334v170.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334v-170.666666a85.333333 85.333333 0 0 1 85.333334-85.333334V256a170.666667 170.666667 0 0 1 162.133333-170.453333L341.333333 85.333333h341.333334z m42.666666 640H298.666667a42.666667 42.666667 0 0 0-4.992 85.034667L298.666667 810.666667h426.666666a42.666667 42.666667 0 0 0 0-85.333334zM682.666667 170.666667H341.333333a85.333333 85.333333 0 0 0-85.12 78.933333L256 256v341.333333h512V256a85.333333 85.333333 0 0 0-78.933333-85.12L682.666667 170.666667z m-42.666667 256a42.666667 42.666667 0 0 1 0 85.333333H384a42.666667 42.666667 0 0 1 0-85.333333h256z m0-170.666667a42.666667 42.666667 0 0 1 0 85.333333H384a42.666667 42.666667 0 1 1 0-85.333333h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconGzztZzz.defaultProps = {
  size: 18,
};

YpIconGzztZzz = React.memo ? React.memo(YpIconGzztZzz) : YpIconGzztZzz;

export default YpIconGzztZzz;
