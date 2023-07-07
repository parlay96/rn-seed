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

let YpIconGzztYzd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m243.498667 268.501334a42.666667 42.666667 0 0 0-56.32-3.541334l-4.010667 3.541334L469.333333 579.626667l-97.834666-97.792-4.010667-3.541334a42.666667 42.666667 0 0 0-59.861333 59.861334l3.541333 4.010666 128 128 4.010667 3.541334a42.666667 42.666667 0 0 0 52.309333 0l4.010667-3.541334 256-256 3.541333-4.010666a42.666667 42.666667 0 0 0-3.541333-56.32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconGzztYzd.defaultProps = {
  size: 18,
};

YpIconGzztYzd = React.memo ? React.memo(YpIconGzztYzd) : YpIconGzztYzd;

export default YpIconGzztYzd;
