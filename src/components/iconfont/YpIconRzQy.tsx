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

let YpIconRzQy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M938.666667 896a42.666667 42.666667 0 0 1-42.666667 42.666667h-768a42.666667 42.666667 0 0 1-42.666667-42.666667V397.397333a42.666667 42.666667 0 0 1 16.213334-33.536l384-269.226666a42.666667 42.666667 0 0 1 52.906666 0l384 269.226666a42.666667 42.666667 0 0 1 16.213334 33.536V896z m-640-341.333333a213.333333 213.333333 0 0 0 426.666666 0h-85.333333a128 128 0 0 1-256 0h-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconRzQy.defaultProps = {
  size: 18,
};

YpIconRzQy = React.memo ? React.memo(YpIconRzQy) : YpIconRzQy;

export default YpIconRzQy;
