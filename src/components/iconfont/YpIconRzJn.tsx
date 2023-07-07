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

let YpIconRzJn: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 85.333333h768a42.666667 42.666667 0 0 1 42.666667 42.666667v822.442667a21.333333 21.333333 0 0 1-30.037334 19.541333L512 811.861333l-396.629333 157.952A21.333333 21.333333 0 0 1 85.333333 950.442667V128a42.666667 42.666667 0 0 1 42.666667-42.666667zM512 576l125.44 65.877333-23.978667-139.605333 101.376-98.901333-140.202666-20.394667L512 256l-62.72 127.061333-140.117333 20.394667L410.453333 502.272l-23.893333 139.605333L512 576z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconRzJn.defaultProps = {
  size: 18,
};

YpIconRzJn = React.memo ? React.memo(YpIconRzJn) : YpIconRzJn;

export default YpIconRzJn;
