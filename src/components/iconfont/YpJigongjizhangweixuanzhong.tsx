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

let YpJigongjizhangweixuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M848.8 1007.8H175.2c-66.3 0-120.2-53.9-120.2-120.2V136.3C55 70 108.9 16.1 175.2 16.1h673.6C915.1 16.1 969 70 969 136.3v751.3c0 66.3-53.9 120.2-120.2 120.2zM175.2 111.9c-13.4 0-24.4 10.9-24.4 24.4v751.3c0 13.5 10.9 24.4 24.4 24.4h673.6c13.5 0 24.4-10.9 24.4-24.4V136.3c0-13.4-10.9-24.4-24.4-24.4H175.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M266 57.6h83.2v912H266zM467.2 406.4h296v76.8h-296z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M496.266 270.77l142.552 142.55-54.306 54.306-142.551-142.552z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M780.329 325.058L637.777 467.61l-54.305-54.306 142.551-142.55zM467.2 566.8h296v76.8h-296z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M653.645 457.245v296h-76.8v-296z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

YpJigongjizhangweixuanzhong.defaultProps = {
  size: 18,
};

YpJigongjizhangweixuanzhong = React.memo ? React.memo(YpJigongjizhangweixuanzhong) : YpJigongjizhangweixuanzhong;

export default YpJigongjizhangweixuanzhong;
