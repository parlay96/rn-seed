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

let YpIconHyzxWgbx: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 128c127.264 0 224 110.72 224 256 0 290.592-311.264 449.728-416 512-104.736-62.272-416-221.408-416-512 0-145.28 98.336-256 224-256 77.92 0 150.08 38.496 192 80C553.92 166.496 626.08 128 704 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M453.824 407.232L602.176 736l90.496-200.512H800v-46.976h-139.936l-57.888 128.256L453.824 288l-90.496 200.512H256v46.976h139.936z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconHyzxWgbx.defaultProps = {
  size: 18,
};

YpIconHyzxWgbx = React.memo ? React.memo(YpIconHyzxWgbx) : YpIconHyzxWgbx;

export default YpIconHyzxWgbx;
