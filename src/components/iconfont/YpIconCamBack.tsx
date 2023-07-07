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

let YpIconCamBack: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M248.661333 298.666667l108.202667 108.202666L296.533333 467.2 85.333333 256l211.2-211.2 60.330667 60.330667L248.661333 213.333333H554.666667a341.333333 341.333333 0 1 1 0 682.666667H170.666667v-85.333333h384a256 256 0 1 0 0-512H248.661333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconCamBack.defaultProps = {
  size: 18,
};

YpIconCamBack = React.memo ? React.memo(YpIconCamBack) : YpIconCamBack;

export default YpIconCamBack;
