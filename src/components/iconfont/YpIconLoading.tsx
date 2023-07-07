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

let YpIconLoading: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 704v256h-64v-256h64z m126.4-78.848l180.992 180.992-45.248 45.248-180.992-180.992 45.248-45.248z m-316.8 0l45.248 45.248-180.992 180.992-45.248-45.248 180.992-180.992zM960 480v64h-256v-64h256z m-640 0v64H64v-64h256zM217.856 172.608l180.992 180.992-45.248 45.248-180.992-180.992 45.248-45.248z m588.288 0l45.248 45.248-180.992 180.992-45.248-45.248 180.992-180.992zM544 64v256h-64V64h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconLoading.defaultProps = {
  size: 18,
};

YpIconLoading = React.memo ? React.memo(YpIconLoading) : YpIconLoading;

export default YpIconLoading;
