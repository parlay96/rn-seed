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

let YpIconZwjsSyh: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1536 1024" width={size} height={size} {...rest}>
      <Path
        d="M313.472 1024l369.92-1024H286.336L0 1024h313.472zM1166.08 1024L1536 0H1138.944L852.608 1024h313.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconZwjsSyh.defaultProps = {
  size: 18,
};

YpIconZwjsSyh = React.memo ? React.memo(YpIconZwjsSyh) : YpIconZwjsSyh;

export default YpIconZwjsSyh;
