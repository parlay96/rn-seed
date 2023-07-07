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

let YpXiazai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1088 1024" width={size} height={size} {...rest}>
      <Path
        d="M979.2 595.2c25.6 0 44.8 19.2 44.8 38.4v288c0 57.6-44.8 102.4-96 102.4H102.4C44.8 1024 0 979.2 0 928V640c0-25.6 19.2-44.8 44.8-44.8 25.6 0 44.8 19.2 51.2 38.4v288c0 6.4 6.4 12.8 6.4 12.8h812.8c6.4 0 12.8-6.4 12.8-6.4V640c0-12.8 6.4-25.6 12.8-32 12.8-6.4 25.6-12.8 38.4-12.8zM512 0c25.6 0 44.8 19.2 44.8 38.4V601.6l230.4-172.8c19.2-12.8 44.8-12.8 64 6.4 19.2 19.2 12.8 44.8 0 64l-6.4 6.4-300.8 230.4c-12.8 12.8-32 12.8-51.2 6.4l-6.4-6.4-300.8-230.4c-19.2-12.8-25.6-44.8-12.8-64s38.4-25.6 64-12.8l6.4 6.4 224 172.8V44.8c0-25.6 19.2-44.8 44.8-44.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpXiazai.defaultProps = {
  size: 18,
};

YpXiazai = React.memo ? React.memo(YpXiazai) : YpXiazai;

export default YpXiazai;
