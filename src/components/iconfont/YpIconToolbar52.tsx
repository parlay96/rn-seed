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

let YpIconToolbar52: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M316.16 606.762667a42.666667 42.666667 0 0 1 59.733333 8.234666A170.282667 170.282667 0 0 0 512 682.666667a170.282667 170.282667 0 0 0 136.064-67.626667 42.666667 42.666667 0 1 1 67.968 51.584A255.616 255.616 0 0 1 512 768a255.616 255.616 0 0 1-204.074667-101.461333 42.666667 42.666667 0 0 1 8.192-59.733334z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar52.defaultProps = {
  size: 18,
};

YpIconToolbar52 = React.memo ? React.memo(YpIconToolbar52) : YpIconToolbar52;

export default YpIconToolbar52;
