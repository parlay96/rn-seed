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

let YpIconMasageEdit06: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m128 0l768 0q128 0 128 128l0 768q0 128-128 128l-768 0q-128 0-128-128l0-768q0-128 128-128Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M505.408 168.96L217.28 253.056a24 24 0 0 0-17.28 23.04v172.352c0 188.512 119.392 344.672 304.448 406.336a24 24 0 0 0 15.168 0c185.024-61.664 304.384-217.792 304.384-406.24v-172.48a24 24 0 0 0-17.28-23.04L518.88 168.96a24 24 0 0 0-13.44 0z m6.688 48l263.904 77.12v154.464l-0.128 9.984c-3.936 156.032-100.352 285.44-251.584 343.616l-12.256 4.448-2.304-0.768c-160.224-57.408-261.728-193.44-261.728-357.376V294.08l264.096-77.088z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 312a104 104 0 1 0 0 208 104 104 0 0 0 0-208z m0 48a56 56 0 1 1 0 112 56 56 0 0 1 0-112z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M512 472a152 152 0 0 1 152 152 24 24 0 1 1-48 0 104 104 0 1 0-208 0 24 24 0 1 1-48 0A152 152 0 0 1 512 472z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

YpIconMasageEdit06.defaultProps = {
  size: 18,
};

YpIconMasageEdit06 = React.memo ? React.memo(YpIconMasageEdit06) : YpIconMasageEdit06;

export default YpIconMasageEdit06;
