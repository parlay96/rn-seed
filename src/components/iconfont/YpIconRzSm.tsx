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

let YpIconRzSm: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M146.79999969 111.2L492.63999969 34.16c12.79999969-2.88 25.99999969-2.88 38.72000062 0l345.84 77.04a44.56000031 44.56000031 0 0 1 34.8 43.44v444.96c0 89.35999969-44.56000031 172.8-118.72000031 222.40000031l-231.76000031 154.87999969c-30 19.99999969-69.04000031 19.99999969-99.03999938 0L230.72 822.00000031A267.52000031 267.52000031 0 0 1 111.99999969 599.6V154.71999969c0-20.80000031 14.4-38.95999969 34.8-43.44z m476.32000031 252.79999969A111.19999969 111.19999969 0 0 0 512 252.56 111.19999969 111.19999969 0 0 0 400.88 363.99999969 111.19999969 111.19999969 0 0 0 512 475.35999969 111.19999969 111.19999969 0 0 0 623.12 363.99999969z m87.67999969 334.08A200.16 200.16 0 0 0 512 519.60000031a200.16 200.16 0 0 0-198.79999969 178.47999938h397.59999938z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconRzSm.defaultProps = {
  size: 18,
};

YpIconRzSm = React.memo ? React.memo(YpIconRzSm) : YpIconRzSm;

export default YpIconRzSm;
