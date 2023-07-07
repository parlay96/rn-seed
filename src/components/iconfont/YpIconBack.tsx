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

let YpIconBack: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M439.168 183.168a42.666667 42.666667 0 0 1 63.872 56.32l-3.541333 4.010667L231.04 512l268.458667 268.501333a42.666667 42.666667 0 0 1 3.541333 56.32l-3.541333 4.010667a42.666667 42.666667 0 0 1-56.32 3.541333l-4.010667-3.541333-298.666667-298.666667a42.666667 42.666667 0 0 1-3.541333-56.32l3.541333-4.010666 298.666667-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M853.333333 469.333333a42.666667 42.666667 0 0 1 4.992 85.034667L853.333333 554.666667H170.666667a42.666667 42.666667 0 0 1-4.992-85.034667L170.666667 469.333333h682.666666z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconBack.defaultProps = {
  size: 18,
};

YpIconBack = React.memo ? React.memo(YpIconBack) : YpIconBack;

export default YpIconBack;
