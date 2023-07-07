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

let YpIconHyzxtsJnrz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M170.666667 85.333333h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v822.442667a21.333333 21.333333 0 0 1-30.037333 19.498666L512 811.946667l-353.962667 157.952A21.333333 21.333333 0 0 1 128 950.442667V128a42.666667 42.666667 0 0 1 42.666667-42.666667z m341.333333 490.666667l125.397333 65.92-23.936-139.605333 101.418667-98.901334-140.202667-20.394666L512 256l-62.72 127.018667-140.16 20.394666 101.418667 98.901334-23.893334 139.605333L512 576z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconHyzxtsJnrz.defaultProps = {
  size: 18,
};

YpIconHyzxtsJnrz = React.memo ? React.memo(YpIconHyzxtsJnrz) : YpIconHyzxtsJnrz;

export default YpIconHyzxtsJnrz;
