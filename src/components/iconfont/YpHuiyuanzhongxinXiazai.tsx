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

let YpHuiyuanzhongxinXiazai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M851.584 695.104V876.8c0 9.6-7.872 17.408-17.472 17.408H189.888a17.472 17.472 0 0 1-17.472-17.408v-181.696a12.48 12.48 0 0 0-12.416-12.416H97.792a12.48 12.48 0 0 0-12.48 12.416v211.584c0 41.152 33.472 74.624 74.688 74.624h704c41.216 0 74.688-33.472 74.688-74.624V695.04a12.48 12.48 0 0 0-12.48-12.416H864a12.48 12.48 0 0 0-12.416 12.416z"
        fill={getIconColor(color, 0, '#0092FF')}
      />
      <Path
        d="M575.04 84.736V624.64l207.04-208.512a41.472 41.472 0 0 1 59.008 0 42.24 42.24 0 0 1 0 59.456L562.88 755.84l-1.536 1.408c-0.256 0.256-0.448 0.512-0.704 0.64l-0.832 0.704-0.96 0.704-0.64 0.512-1.024 0.704-0.64 0.384a10.496 10.496 0 0 1-1.152 0.704l-0.64 0.384c-0.32 0.192-0.64 0.448-1.152 0.576a2.56 2.56 0 0 0-0.64 0.384l-1.024 0.576-0.704 0.384-0.96 0.448-0.832 0.384-0.96 0.32-1.088 0.384c-0.256 0.128-0.448 0.256-0.832 0.256l-1.152 0.32-0.768 0.256-1.28 0.384-0.704 0.128c-0.512 0.128-0.832 0.192-1.28 0.192l-0.768 0.128-1.28 0.256-0.896 0.128-1.152 0.128c-0.384 0-0.704 0-1.088 0.128-0.384 0-0.64 0-0.96 0.128a24.192 24.192 0 0 1-4.16 0c-0.384 0-0.64 0-0.96-0.128-0.384 0-0.704 0-1.088-0.128l-1.152-0.128-0.832-0.128-1.28-0.256-0.768-0.128c-0.512-0.064-0.832-0.192-1.28-0.192l-0.768-0.128-1.28-0.384-0.704-0.256-1.28-0.32-0.768-0.256-1.088-0.384-0.96-0.32-0.832-0.384-0.96-0.448-0.64-0.384-1.152-0.64a2.56 2.56 0 0 1-0.576-0.32 10.496 10.496 0 0 0-1.216-0.704l-0.576-0.384-1.216-0.704-0.576-0.384a6.528 6.528 0 0 1-1.088-0.832c-0.192-0.128-0.32-0.384-0.576-0.448l-0.96-0.768a5.184 5.184 0 0 0-0.832-0.704l-0.704-0.64-1.408-1.408-277.952-280a42.24 42.24 0 0 1 0-59.52 41.472 41.472 0 0 1 59.008 0l206.976 208.64V84.672c0-23.232 18.752-42.048 41.728-42.048 23.04 0 41.728 18.816 41.728 42.048z"
        fill={getIconColor(color, 1, '#0092FF')}
      />
    </Svg>
  );
};

YpHuiyuanzhongxinXiazai.defaultProps = {
  size: 18,
};

YpHuiyuanzhongxinXiazai = React.memo ? React.memo(YpHuiyuanzhongxinXiazai) : YpHuiyuanzhongxinXiazai;

export default YpHuiyuanzhongxinXiazai;
