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

let YpZhaogongzuoxuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M296.5 1024c-25.6 0-46.3-20.7-46.3-46.3v-54.1c0-0.6 0.5-1.1 1.1-1.1h90.3c0.6 0 1.1 0.5 1.1 1.1v54.1c0.1 25.6-20.6 46.3-46.2 46.3zM727.5 1024c-25.6 0-46.3-20.7-46.3-46.3v-55.3h92.6v55.3c-0.1 25.6-20.8 46.3-46.3 46.3zM301.1 324.1V205.4c0-38.6 31.4-70.1 70.1-70.1h281.7c38.6 0 70.1 31.4 70.1 70.1v118.7h100V205.4c0-93.9-76.1-170.1-170.1-170.1H371.2c-93.9 0-170.1 76.1-170.1 170.1v118.7h100z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M853.9 933H170.1C76.1 933 0 856.9 0 763V406.5c0-93.9 76.1-170.1 170.1-170.1h683.8c93.9 0 170.1 76.1 170.1 170.1V763c0 93.9-76.1 170-170.1 170z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M631.9 637.1H392.2c-28.9 0-52.3-23.4-52.3-52.3v-0.1c0-28.9 23.4-52.3 52.3-52.3h239.7c28.9 0 52.3 23.4 52.3 52.3v0.1c0 28.8-23.5 52.3-52.3 52.3z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpZhaogongzuoxuanzhong.defaultProps = {
  size: 18,
};

YpZhaogongzuoxuanzhong = React.memo ? React.memo(YpZhaogongzuoxuanzhong) : YpZhaogongzuoxuanzhong;

export default YpZhaogongzuoxuanzhong;
