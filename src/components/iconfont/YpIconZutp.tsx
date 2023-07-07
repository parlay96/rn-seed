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

let YpIconZutp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1450 1024" width={size} height={size} {...rest}>
      <Path
        d="M1365.333333 0a85.333333 85.333333 0 0 1 85.333334 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333334 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h1280z m0 85.333333H85.333333v853.333334h1280V85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M265.386667 737.194667l241.877333-440.533334a64 64 0 0 1 112.810667 1.173334l148.693333 284.309333 165.76-127.914667a64 64 0 0 1 94.229333 18.133334l155.2 263.125333A64 64 0 0 1 1128.832 832H321.493333a64 64 0 0 1-56.106666-94.805333z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconZutp.defaultProps = {
  size: 18,
};

YpIconZutp = React.memo ? React.memo(YpIconZutp) : YpIconZutp;

export default YpIconZutp;
