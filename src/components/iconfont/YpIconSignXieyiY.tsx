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

let YpIconSignXieyiY: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-341.333333 0a341.333333 341.333333 0 1 0 682.666666 0 341.333333 341.333333 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M609.834667 396.501333a42.666667 42.666667 0 0 1 63.872 56.32l-3.541334 4.010667-170.666666 170.666667a42.666667 42.666667 0 0 1-56.32 3.541333l-4.010667-3.541333-85.333333-85.333334a42.666667 42.666667 0 0 1 56.32-63.872l4.010666 3.541334L469.333333 536.96l140.501334-140.458667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconSignXieyiY.defaultProps = {
  size: 18,
};

YpIconSignXieyiY = React.memo ? React.memo(YpIconSignXieyiY) : YpIconSignXieyiY;

export default YpIconSignXieyiY;
