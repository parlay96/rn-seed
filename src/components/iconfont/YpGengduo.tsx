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

let YpGengduo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M366.1184 832c-6.944 0-13.8912-1.7376-19.104-6.9472-10.4192-10.4192-10.4192-26.0512 0-36.4736l276.1472-276.144-276.1472-276.1472c-10.4192-10.4224-10.4192-26.0512 0-36.4736 10.4224-10.4192 26.0512-10.4192 36.4736 0l295.2512 295.2512c10.4192 10.4224 10.4192 26.0512 0 36.4736l-295.2512 295.2512c-5.2096 1.7376-10.4224 5.2096-17.3696 5.2096z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpGengduo.defaultProps = {
  size: 18,
};

YpGengduo = React.memo ? React.memo(YpGengduo) : YpGengduo;

export default YpGengduo;
