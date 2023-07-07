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

let YpIconFollowHig1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.312a256 256 0 1 1-30.272 510.272 44.416 44.416 0 0 1-12.416 1.728A298.688 298.688 0 0 0 170.688 896a42.688 42.688 0 0 1-85.376 0c0-167.68 107.52-310.4 257.472-362.624a256 256 0 0 1 169.216-448z m0 85.376A170.688 170.688 0 1 0 512 512a170.688 170.688 0 0 0 0-341.312z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M810.688 640v85.312H896a42.688 42.688 0 0 1 0 85.376h-85.312V896a42.688 42.688 0 0 1-85.376 0v-85.376H640a42.688 42.688 0 0 1 0-85.312h85.312V640a42.688 42.688 0 0 1 85.376 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconFollowHig1.defaultProps = {
  size: 18,
};

YpIconFollowHig1 = React.memo ? React.memo(YpIconFollowHig1) : YpIconFollowHig1;

export default YpIconFollowHig1;
