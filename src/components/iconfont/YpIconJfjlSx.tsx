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

let YpIconJfjlSx: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 170.666667v85.333333h-42.666667l-213.333333 320V938.666667H384v-362.666667L170.666667 256H128V170.666667h768zM273.237333 256L469.333333 550.144V853.333333h85.333334v-303.189333L750.762667 256H273.237333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconJfjlSx.defaultProps = {
  size: 18,
};

YpIconJfjlSx = React.memo ? React.memo(YpIconJfjlSx) : YpIconJfjlSx;

export default YpIconJfjlSx;
