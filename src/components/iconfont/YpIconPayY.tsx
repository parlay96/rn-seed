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

let YpIconPayY: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FF9800')}
      />
      <Path
        d="M737.834667 311.168a42.666667 42.666667 0 0 1 63.872 56.32l-3.541334 4.010667-298.666666 298.666666a42.666667 42.666667 0 0 1-56.32 3.541334l-4.010667-3.541334-170.666667-170.666666a42.666667 42.666667 0 0 1 56.32-63.872l4.010667 3.541333L469.333333 579.626667l268.501334-268.458667z"
        fill={getIconColor(color, 1, '#ffffff')}
      />
    </Svg>
  );
};

YpIconPayY.defaultProps = {
  size: 18,
};

YpIconPayY = React.memo ? React.memo(YpIconPayY) : YpIconPayY;

export default YpIconPayY;
