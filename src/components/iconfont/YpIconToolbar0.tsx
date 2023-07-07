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

let YpIconToolbar0: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M437.290667 682.666667h149.418666c-14.08 33.749333-40.96 60.586667-74.709333 74.709333A139.136 139.136 0 0 1 437.290667 682.666667zM640 571.818667l42.666667 48.426666v41.088H341.333333v-41.088l42.666667-48.426666V448c0-74.325333 53.418667-137.514667 128-160.938667 74.581333 23.424 128 86.613333 128 160.938667v123.818667zM512 490.666667a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar0.defaultProps = {
  size: 18,
};

YpIconToolbar0 = React.memo ? React.memo(YpIconToolbar0) : YpIconToolbar0;

export default YpIconToolbar0;
