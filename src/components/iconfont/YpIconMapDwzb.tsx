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

let YpIconMapDwzb: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M160 832a352 96 0 1 0 704 0 352 96 0 1 0-704 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M320 832a192 64 0 1 0 384 0 192 64 0 1 0-384 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M466.752 778.048l-158.4-158.4a288 288 0 1 1 407.296 0l-158.4 158.4a64 64 0 0 1-90.496 0zM512 480a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpIconMapDwzb.defaultProps = {
  size: 18,
};

YpIconMapDwzb = React.memo ? React.memo(YpIconMapDwzb) : YpIconMapDwzb;

export default YpIconMapDwzb;
