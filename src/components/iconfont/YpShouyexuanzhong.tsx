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

let YpShouyexuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870 1024H170.2C76.2 1024 0.1 947.9 0.1 853.9v-410C0.1 394.4 24 348 64.3 319.3L422.7 63.7c53.2-37.9 124.6-37.9 177.7 0l358.4 255.6c40.3 28.7 64.2 75.2 64.2 124.6v427c0 84.5-68.5 153.1-153 153.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M511.5 775.4c-34.5 0-62.4-27.9-62.4-62.4V494.6c0-34.5 27.9-62.4 62.4-62.4s62.4 27.9 62.4 62.4V713c0.1 34.5-27.9 62.4-62.4 62.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpShouyexuanzhong.defaultProps = {
  size: 18,
};

YpShouyexuanzhong = React.memo ? React.memo(YpShouyexuanzhong) : YpShouyexuanzhong;

export default YpShouyexuanzhong;
