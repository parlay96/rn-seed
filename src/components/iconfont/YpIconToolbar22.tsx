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

let YpIconToolbar22: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 469.333333H128v85.333334a384 384 0 0 0 768 0v-85.333334zM213.333333 554.666667h597.333334a298.666667 298.666667 0 0 1-597.333334 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 85.333333c231.68 0 420.181333 184.618667 426.496 414.72L938.666667 512H85.333333C85.333333 276.352 276.352 85.333333 512 85.333333z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M428.330667 180.992l40.661333 325.717333 0.298667 5.248H383.658667l-37.333334-298.453333a339.114667 339.114667 0 0 1 82.005334-32.512z m249.344 32.512l-37.333334 298.453333H554.666667l0.341333-5.248 40.704-325.717333c29.013333 7.338667 56.490667 18.346667 81.962667 32.512z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M640 640a128 128 0 0 1-255.786667 7.509333L384 640h256z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M938.666667 469.333333a42.666667 42.666667 0 0 1 4.992 85.034667L938.666667 554.666667H85.333333a42.666667 42.666667 0 0 1-4.992-85.034667L85.333333 469.333333h853.333334z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar22.defaultProps = {
  size: 18,
};

YpIconToolbar22 = React.memo ? React.memo(YpIconToolbar22) : YpIconToolbar22;

export default YpIconToolbar22;
