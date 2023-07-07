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

let YpIconWorkWay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 256a64 64 0 0 1 64 64v576a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V320a64 64 0 0 1 64-64h768z m-25.6 89.6H153.6v524.8h716.8V345.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M256 558.272h512v89.6H256z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M768 64a64 64 0 0 1 64 64v128h-89.6V153.6H281.6L281.536 256H192V128a64 64 0 0 1 64-64h512z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpIconWorkWay.defaultProps = {
  size: 18,
};

YpIconWorkWay = React.memo ? React.memo(YpIconWorkWay) : YpIconWorkWay;

export default YpIconWorkWay;
