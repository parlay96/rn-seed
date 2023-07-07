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

let YpZhaogongzuoweixuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.7 922.4h-90.3c-0.6 0-1.1 0.5-1.1 1.1v54.1c0 25.6 20.7 46.3 46.3 46.3s46.3-20.7 46.3-46.3v-54.1c-0.1-0.5-0.6-1.1-1.2-1.1zM773.7 922.4h-92.6v55.3c0 25.6 20.7 46.3 46.3 46.3s46.3-20.7 46.3-46.3v-55.3zM301.1 324.1V205.4c0-38.6 31.4-70.1 70.1-70.1h281.7c38.6 0 70.1 31.4 70.1 70.1v118.7h100V205.4c0-93.9-76.1-170.1-170.1-170.1H371.2c-93.9 0-170.1 76.1-170.1 170.1v118.7h100z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M853.9 336.4c38.6 0 70.1 31.4 70.1 70.1V763c0 38.6-31.4 70.1-70.1 70.1H170.1c-38.6 0-70.1-31.4-70.1-70.1V406.5c0-38.6 31.4-70.1 70.1-70.1h683.8m0-100H170.1C76.1 236.4 0 312.5 0 406.5V763c0 93.9 76.1 170 170.1 170h683.8c93.9 0 170.1-76.1 170.1-170.1V406.5c0-94-76.1-170.1-170.1-170.1z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M631.8 532.4H392.2c-28.9 0-52.3 23.4-52.3 52.3v0.1c0 28.9 23.4 52.3 52.3 52.3h239.7c28.9 0 52.3-23.4 52.3-52.3v-0.1c0-28.9-23.5-52.3-52.4-52.3z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpZhaogongzuoweixuanzhong.defaultProps = {
  size: 18,
};

YpZhaogongzuoweixuanzhong = React.memo ? React.memo(YpZhaogongzuoweixuanzhong) : YpZhaogongzuoweixuanzhong;

export default YpZhaogongzuoweixuanzhong;
