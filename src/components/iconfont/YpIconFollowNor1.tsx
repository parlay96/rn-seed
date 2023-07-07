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

let YpIconFollowNor1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.3504a256 256 0 1 1-30.464 510.208 42.1376 42.1376 0 0 1-12.1856 1.792A298.6496 298.6496 0 0 0 170.6496 896a42.6496 42.6496 0 1 1-85.2992 0c0-167.7312 107.52-310.3232 257.3824-362.6496A256 256 0 0 1 512 85.3504z m0 85.2992A170.6496 170.6496 0 1 0 512 512a170.6496 170.6496 0 0 0 0-341.3504z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M931.328 750.336l-60.2624 60.3136 60.2624 60.3648a42.6496 42.6496 0 0 1-60.3136 60.3136l-60.3136-60.3648-60.416 60.416a42.6496 42.6496 0 0 1-60.3136-60.416l60.416-60.3136-60.416-60.3136a42.6496 42.6496 0 0 1 60.3648-60.3648l60.3648 60.3136 60.3136-60.3136a42.6496 42.6496 0 0 1 60.3136 60.3648z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconFollowNor1.defaultProps = {
  size: 18,
};

YpIconFollowNor1 = React.memo ? React.memo(YpIconFollowNor1) : YpIconFollowNor1;

export default YpIconFollowNor1;
