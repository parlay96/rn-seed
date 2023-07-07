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

let YpIconMapTaxi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M938.666667 512v384a42.666667 42.666667 0 0 1-42.666667 42.666667h-42.666667a42.666667 42.666667 0 0 1-42.666666-42.666667v-42.666667H213.333333v42.666667a42.666667 42.666667 0 0 1-42.666666 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667v-384l105.813334-246.954667A85.333333 85.333333 0 0 1 269.653333 213.333333H384V128h256v85.333333h114.389333a85.333333 85.333333 0 0 1 78.421334 51.712L938.666667 512zM178.176 512h667.648l-91.434667-213.333333H269.653333l-91.434666 213.333333h-0.042667zM277.333333 725.333333a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m469.333334 0a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconMapTaxi.defaultProps = {
  size: 18,
};

YpIconMapTaxi = React.memo ? React.memo(YpIconMapTaxi) : YpIconMapTaxi;

export default YpIconMapTaxi;
