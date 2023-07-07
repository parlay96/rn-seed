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

let YpShouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M826.2 942.2h-0.1l-207.5-0.7-0.1-383.5H404.2l2.9 383.5H198c-22.1 0-40-17.9-40-40v-429h40v429h168.8l-2.6-343.2c-0.1-10.7 4-20.9 11.6-28.5 7.6-7.6 17.6-11.8 28.4-11.8h214.3c22 0 40 17.9 40 40l0.1 343.6 167.6 0.5 0.9-430 40 0.1-0.9 430c0 10.7-4.2 20.7-11.8 28.3-7.5 7.5-17.5 11.7-28.2 11.7zM114.8 448.2l400.1-340.6 394.2 340.6h61.1L515.1 54.9l-462 393.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpShouye.defaultProps = {
  size: 18,
};

YpShouye = React.memo ? React.memo(YpShouye) : YpShouye;

export default YpShouye;
