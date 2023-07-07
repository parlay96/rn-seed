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

let YpIconYulan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M682.666667 469.333333a213.333333 213.333333 0 0 1 178.005333 330.965334l65.493333 65.536a42.666667 42.666667 0 0 1-56.32 63.872l-4.010666-3.541334-65.536-65.493333A213.333333 213.333333 0 1 1 682.666667 469.333333z m85.333333-384a128 128 0 0 1 127.786667 120.490667L896 213.333333v170.666667a42.666667 42.666667 0 0 1-85.034667 4.992L810.666667 384V213.333333a42.666667 42.666667 0 0 0-37.674667-42.368L768 170.666667H213.333333a42.666667 42.666667 0 0 0-42.368 37.674666L170.666667 213.333333v554.666667a42.666667 42.666667 0 0 0 37.674666 42.368L213.333333 810.666667h170.666667a42.666667 42.666667 0 0 1 4.992 85.034666L384 896H213.333333a128 128 0 0 1-127.786666-120.490667L85.333333 768V213.333333a128 128 0 0 1 120.490667-127.786666L213.333333 85.333333h554.666667z m-85.333333 469.333334a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconYulan.defaultProps = {
  size: 18,
};

YpIconYulan = React.memo ? React.memo(YpIconYulan) : YpIconYulan;

export default YpIconYulan;
