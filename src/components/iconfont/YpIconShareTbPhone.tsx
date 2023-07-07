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

let YpIconShareTbPhone: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C229.2224 0 0 229.2224 0 512s229.2224 512 512 512 512-229.2224 512-512S794.7776 0 512 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M358.4 256h307.2a25.6 25.6 0 0 1 25.6 25.6v460.8a25.6 25.6 0 0 1-25.6 25.6H358.4a25.6 25.6 0 0 1-25.6-25.6V281.6a25.6 25.6 0 0 1 25.6-25.6z m153.6 384a25.6 25.6 0 1 0 0 51.2 25.6 25.6 0 0 0 0-51.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconShareTbPhone.defaultProps = {
  size: 18,
};

YpIconShareTbPhone = React.memo ? React.memo(YpIconShareTbPhone) : YpIconShareTbPhone;

export default YpIconShareTbPhone;
