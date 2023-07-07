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

let YpIconShare: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 111.99999969a40.00000031 40.00000031 0 0 1 0 80.00000062 319.99999969 319.99999969 0 1 0 319.99999969 319.99999969 40.00000031 40.00000031 0 0 1 80.00000062 0c0 220.92-179.08000031 400.00000031-400.00000031 400.00000031S111.99999969 732.92 111.99999969 512 291.08 111.99999969 512 111.99999969z m360 0a40.00000031 40.00000031 0 0 1 40.00000031 40.00000031v240a40.00000031 40.00000031 0 0 1-80.00000062 0V248.55999969l-291.72 291.72a40.00000031 40.00000031 0 0 1-56.55999938-56.55999938L775.44000031 192.00000031H632a40.00000031 40.00000031 0 0 1 0-80.00000062h240z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconShare.defaultProps = {
  size: 18,
};

YpIconShare = React.memo ? React.memo(YpIconShare) : YpIconShare;

export default YpIconShare;
