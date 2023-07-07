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

let YpIconToolbar00: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-480 0a480 480 0 1 0 960 0 480 480 0 1 0-960 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 272a40.00000031 40.00000031 0 0 1 40.00000031 40.00000031v159.99999938h159.99999938a40.00000031 40.00000031 0 0 1 0 80.00000062h-159.99999938v159.99999938a40.00000031 40.00000031 0 0 1-80.00000062 0v-159.99999938H312.00000031a40.00000031 40.00000031 0 0 1 0-80.00000062h159.99999938V312.00000031a40.00000031 40.00000031 0 0 1 40.00000031-40.00000031z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar00.defaultProps = {
  size: 18,
};

YpIconToolbar00 = React.memo ? React.memo(YpIconToolbar00) : YpIconToolbar00;

export default YpIconToolbar00;
