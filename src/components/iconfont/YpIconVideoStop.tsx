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

let YpIconVideoStop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M213.333333 170.666667m64 0l0 0q64 0 64 64l0 554.666666q0 64-64 64l0 0q-64 0-64-64l0-554.666666q0-64 64-64Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M682.666667 170.666667m64 0l0 0q64 0 64 64l0 554.666666q0 64-64 64l0 0q-64 0-64-64l0-554.666666q0-64 64-64Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconVideoStop.defaultProps = {
  size: 18,
};

YpIconVideoStop = React.memo ? React.memo(YpIconVideoStop) : YpIconVideoStop;

export default YpIconVideoStop;
