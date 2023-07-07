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

let YpIconMiniGohome: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 896H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667v-384H97.834667a21.333333 21.333333 0 0 1-14.336-37.12l399.786666-363.434666a42.666667 42.666667 0 0 1 57.429334 0l399.786666 363.434666a21.333333 21.333333 0 0 1-14.336 37.12H853.333333v384a42.666667 42.666667 0 0 1-42.666666 42.666667zM256 810.666667h512V390.698667l-256-232.704-256 232.704V810.666667z m85.333333-170.666667h341.333334v85.333333H341.333333v-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconMiniGohome.defaultProps = {
  size: 18,
};

YpIconMiniGohome = React.memo ? React.memo(YpIconMiniGohome) : YpIconMiniGohome;

export default YpIconMiniGohome;
