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

let YpIconCollectHig: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M416.341333 128.981333L329.941333 304.085333l-193.237333 28.074667a106.666667 106.666667 0 0 0-61.013333 31.104l-5.12 5.632a106.666667 106.666667 0 0 0 7.04 145.194667l139.776 136.277333-32.981334 192.426667a106.666667 106.666667 0 0 0 10.709334 67.712l3.626666 6.314666a106.666667 106.666667 0 0 0 140.458667 38.442667l172.8-90.88 172.8 90.88a106.666667 106.666667 0 0 0 67.669333 10.709333l6.912-1.408a106.666667 106.666667 0 0 0 80.213334-121.728l-33.024-192.469333 139.818666-136.277333a106.666667 106.666667 0 0 0 31.146667-61.013334l0.725333-6.997333a106.666667 106.666667 0 0 0-90.965333-113.92l-193.28-28.074667-86.357333-175.104a106.666667 106.666667 0 0 0-191.317334 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconCollectHig.defaultProps = {
  size: 18,
};

YpIconCollectHig = React.memo ? React.memo(YpIconCollectHig) : YpIconCollectHig;

export default YpIconCollectHig;
