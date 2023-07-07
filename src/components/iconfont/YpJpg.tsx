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

let YpJpg: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M160 32c-12 0-24.8 4.8-33.6 14.4S112 68 112 80v864c0 12 4.8 24.8 14.4 33.6 9.6 9.6 21.6 14.4 33.6 14.4h704c12 0 24.8-4.8 33.6-14.4 9.6-9.6 14.4-21.6 14.4-33.6V304L640 32H160z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M912 304H688c-12 0-24.8-4.8-33.6-14.4-9.6-8.8-14.4-21.6-14.4-33.6V32l272 272z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M758.4 705.6L658.4 550.4c-3.2-4.8-8-7.2-13.6-7.2s-10.4 3.2-13.6 7.2l-53.6 83.2-120-194.4c-3.2-4.8-8-7.2-13.6-7.2s-10.4 3.2-13.6 7.2L265.6 705.6c-3.2 4.8-3.2 11.2 0 16 3.2 5.6 8 8 13.6 8h465.6c5.6 0 11.2-3.2 14.4-8 2.4-5.6 2.4-12-0.8-16z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M662.4 412m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

YpJpg.defaultProps = {
  size: 18,
};

YpJpg = React.memo ? React.memo(YpJpg) : YpJpg;

export default YpJpg;
