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

let YpYpMiniCyyAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 953.792A441.792 441.792 0 1 0 512 70.208a441.792 441.792 0 0 0 0 883.584z m0-65.408A376.32 376.32 0 1 1 512 135.616a376.32 376.32 0 0 1 0 752.768z"
        fill={getIconColor(color, 0, '#0092FF')}
      />
      <Path
        d="M479.296 479.296V348.352a32.704 32.704 0 1 1 65.408 0V479.36h130.944a32.704 32.704 0 0 1 0 65.408H544.64v130.944a32.704 32.704 0 1 1-65.408 0V544.64H348.352a32.704 32.704 0 1 1 0-65.408H479.36z"
        fill={getIconColor(color, 1, '#0092FF')}
      />
    </Svg>
  );
};

YpYpMiniCyyAdd.defaultProps = {
  size: 18,
};

YpYpMiniCyyAdd = React.memo ? React.memo(YpYpMiniCyyAdd) : YpYpMiniCyyAdd;

export default YpYpMiniCyyAdd;
