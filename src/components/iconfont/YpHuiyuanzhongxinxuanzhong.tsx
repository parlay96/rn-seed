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

let YpHuiyuanzhongxinxuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M394.3 51.7H213c-16.6 0-31.7 9.6-38.9 24.6L8.5 426.2c-14.7 31.1-9.2 68 14 93.3l427 467.7c33.6 36.8 91.5 36.8 125.1 0l427-467.7c23.2-25.4 28.7-62.3 14-93.3L849.9 76.3c-7.1-15-22.2-24.6-38.9-24.6H661.5"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M509.1 736.7h-0.9c-20.3-0.2-39.4-8.2-53.8-22.5l-119-117.6c-17-16.8-17.1-44.2-0.4-61.1 16.8-17 44.2-17.1 61.1-0.4l113.1 111.8 119.4-112.5c17.4-16.4 44.7-15.6 61.1 1.8s15.6 44.7-1.8 61.1L562.4 715.5c-14.5 13.7-33.4 21.2-53.3 21.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpHuiyuanzhongxinxuanzhong.defaultProps = {
  size: 18,
};

YpHuiyuanzhongxinxuanzhong = React.memo ? React.memo(YpHuiyuanzhongxinxuanzhong) : YpHuiyuanzhongxinxuanzhong;

export default YpHuiyuanzhongxinxuanzhong;
