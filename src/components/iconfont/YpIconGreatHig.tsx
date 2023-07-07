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

let YpIconGreatHig: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M85.333333 384h128v512H85.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V426.666667a42.666667 42.666667 0 0 1 42.666666-42.666667z m225.834667-55.168l260.010667-260.010667a42.666667 42.666667 0 0 1 55.765333-3.968l21.589333 16.213334a64 64 0 0 1 23.594667 66.986666L622.933333 341.333333H896a85.333333 85.333333 0 0 1 85.333333 85.333334v89.770666a85.333333 85.333333 0 0 1-6.4 32.512l-132.053333 320.64a42.666667 42.666667 0 0 1-39.466667 26.410667H341.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V358.997333a42.666667 42.666667 0 0 1 12.501333-30.165333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconGreatHig.defaultProps = {
  size: 18,
};

YpIconGreatHig = React.memo ? React.memo(YpIconGreatHig) : YpIconGreatHig;

export default YpIconGreatHig;
