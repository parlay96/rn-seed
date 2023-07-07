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

let YpShouyewweixuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.5 139.1c14.7 0 28.7 4.5 40.7 13l341.4 243.5c18.4 13.1 29.4 34.5 29.4 57.1v401.2c0 38.6-31.4 70.1-70.1 70.1H170.1c-38.6 0-70.1-31.4-70.1-70.1V452.7c0-22.6 11-43.9 29.4-57.1l341.4-243.5c12-8.5 26.1-13 40.7-13m0.1-100c-34.6 0-69.2 10.5-98.7 31.6L71.4 314.2C26.6 346.1 0 397.7 0 452.7v401.2C0 947.8 76.2 1024 170.1 1024H853c93.9 0 170.1-76.1 170.1-170.1V452.7c0-55-26.6-106.6-71.3-138.5L610.3 70.7c-29.5-21.1-64.1-31.6-98.7-31.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M511.5 775.4c-34.5 0-62.4-27.9-62.4-62.4V494.6c0-34.5 27.9-62.4 62.4-62.4s62.4 27.9 62.4 62.4V713c0.1 34.5-27.9 62.4-62.4 62.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpShouyewweixuanzhong.defaultProps = {
  size: 18,
};

YpShouyewweixuanzhong = React.memo ? React.memo(YpShouyewweixuanzhong) : YpShouyewweixuanzhong;

export default YpShouyewweixuanzhong;
