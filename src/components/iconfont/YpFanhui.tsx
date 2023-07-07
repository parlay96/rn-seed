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

let YpFanhui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M238.933333 519.441067 738.304 1024 785.066667 976.554667 325.154133 512 785.066667 47.445333 738.304 0 238.933333 504.558933 238.933333 519.441067 238.933333 519.441067Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpFanhui.defaultProps = {
  size: 18,
};

YpFanhui = React.memo ? React.memo(YpFanhui) : YpFanhui;

export default YpFanhui;
