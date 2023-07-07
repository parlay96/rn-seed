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

let YpIconMbx: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M404.053333 747.946667a32 32 0 0 1-3.114666-41.642667l3.114666-3.584L594.730667 512l-190.72-190.72a32 32 0 0 1-3.072-41.642667l3.114666-3.584a32 32 0 0 1 41.642667-3.114666l3.584 3.114666 213.333333 213.333334a32 32 0 0 1 3.114667 41.642666l-3.114667 3.584-213.333333 213.333334a32 32 0 0 1-45.226667 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconMbx.defaultProps = {
  size: 18,
};

YpIconMbx = React.memo ? React.memo(YpIconMbx) : YpIconMbx;

export default YpIconMbx;
