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

let YpIconTusu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z m0 85.333333a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 512a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666666a42.666667 42.666667 0 0 1-85.333334 0v-42.666666a42.666667 42.666667 0 0 1 42.666667-42.666667z m0-384a42.666667 42.666667 0 0 1 42.666667 42.666667v256a42.666667 42.666667 0 0 1-85.333334 0V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconTusu.defaultProps = {
  size: 18,
};

YpIconTusu = React.memo ? React.memo(YpIconTusu) : YpIconTusu;

export default YpIconTusu;
