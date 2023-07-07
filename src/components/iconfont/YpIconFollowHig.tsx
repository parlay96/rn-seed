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

let YpIconFollowHig: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M555.6224 156.0064a249.1904 249.1904 0 0 1 352.3584 6.3488 264.6016 264.6016 0 0 1-1.1776 368.5888l-398.1312 407.7056-392.192-406.6304a266.24 266.24 0 0 1 0-369.664 247.6544 247.6544 0 0 1 356.5056 0l37.888 39.2704 39.424-40.3456 2.6624-2.6624z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconFollowHig.defaultProps = {
  size: 18,
};

YpIconFollowHig = React.memo ? React.memo(YpIconFollowHig) : YpIconFollowHig;

export default YpIconFollowHig;
