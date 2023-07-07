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

let YpIconCall: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M597.504 619.392a173.226667 173.226667 0 0 1 18.176-9.301333c39.850667-17.152 75.008-5.034667 121.472 46.293333 28.757333 31.786667 37.248 59.989333 26.154667 85.077333-8.277333 18.773333-24.192 31.744-52.565334 47.744-1.834667 1.024-18.133333 9.984-22.357333 12.458667-65.962667 38.485333-217.258667-49.664-326.058667-200.277333-109.056-150.954667-137.301333-311.936-70.4-351.018667l8.832-5.290667 9.557334-5.888c33.834667-20.693333 55.466667-28.928 81.109333-24.832 25.642667 4.138667 47.445333 22.101333 65.877333 54.741334 38.912 69.077333 30.293333 101.845333-19.712 131.626666-3.584 2.176-16.341333 9.472-17.578666 10.197334-12.245333 7.168 8.533333 55.210667 56.789333 122.026666 48.853333 67.541333 89.728 104.533333 103.082667 96.725334 1.194667-0.682667 13.909333-8.192 17.621333-10.282667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconCall.defaultProps = {
  size: 18,
};

YpIconCall = React.memo ? React.memo(YpIconCall) : YpIconCall;

export default YpIconCall;
