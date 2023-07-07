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

let YpIconSubscription: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 128a768 768 0 0 1 768 768H768A640 640 0 0 0 128 256V128z m0 298.666667A469.333333 469.333333 0 0 1 597.333333 896H469.333333a341.333333 341.333333 0 0 0-341.333333-341.333333V426.666667z m0 298.666666a170.666667 170.666667 0 0 1 170.666667 170.666667h-170.666667v-170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconSubscription.defaultProps = {
  size: 18,
};

YpIconSubscription = React.memo ? React.memo(YpIconSubscription) : YpIconSubscription;

export default YpIconSubscription;
