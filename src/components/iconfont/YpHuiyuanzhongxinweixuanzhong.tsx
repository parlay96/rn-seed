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

let YpHuiyuanzhongxinweixuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.8 1022.1c-35.5 0-69.6-15-93.6-41.3L33.9 559.9C-0.9 521.7-9.2 466.9 13 420.2l149.1-314.9c14.7-31 46.3-51 80.6-51h163.2c27.9 0 50.5 22.6 50.5 50.5s-22.6 50.5-50.5 50.5H250.2L104.3 463.4c-4.5 9.5-2.8 20.6 4.3 28.4l384.3 420.9c6.7 7.3 14.8 8.4 19 8.4 4.2 0 12.3-1.1 19-8.4l384.3-420.9c7.1-7.7 8.7-18.9 4.3-28.4L773.4 155.3h-127c-27.9 0-50.5-22.6-50.5-50.5s22.6-50.5 50.5-50.5h134.5c34.3 0 65.9 20 80.6 51l149.1 314.9c22.1 46.7 13.9 101.5-20.9 139.7L605.4 980.8c-24 26.3-58.1 41.3-93.6 41.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M509.2 721.3h-0.9c-18.2-0.2-35.4-7.4-48.4-20.2L352.8 595.2c-15.3-15.1-15.4-39.7-0.3-55 15.1-15.3 39.7-15.4 55-0.3l101.8 100.6 107.5-101.3c15.6-14.7 40.3-14 55 1.6 14.7 15.6 14 40.3-1.6 55l-113 106.4c-13.1 12.3-30.1 19.1-48 19.1z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpHuiyuanzhongxinweixuanzhong.defaultProps = {
  size: 18,
};

YpHuiyuanzhongxinweixuanzhong = React.memo ? React.memo(YpHuiyuanzhongxinweixuanzhong) : YpHuiyuanzhongxinweixuanzhong;

export default YpHuiyuanzhongxinweixuanzhong;
