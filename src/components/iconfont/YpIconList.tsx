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

let YpIconList: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v768a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h682.666666z m-42.666666 85.333334H213.333333v682.666666h597.333334V170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 640a42.666667 42.666667 0 0 1 0 85.333333H384a42.666667 42.666667 0 0 1 0-85.333333h128z m128-170.666667a42.666667 42.666667 0 0 1 0 85.333334H384a42.666667 42.666667 0 0 1 0-85.333334h256z m0-170.666666a42.666667 42.666667 0 0 1 0 85.333333H384a42.666667 42.666667 0 1 1 0-85.333333h256z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconList.defaultProps = {
  size: 18,
};

YpIconList = React.memo ? React.memo(YpIconList) : YpIconList;

export default YpIconList;
