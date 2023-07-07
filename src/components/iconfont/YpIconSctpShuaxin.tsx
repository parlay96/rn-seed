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

let YpIconSctpShuaxin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M820.906667 66.7648l1.262933 3.754667 53.009067 197.870933a34.133333 34.133333 0 0 1-20.343467 40.5504l-3.754667 1.2288-197.870933 53.009067a34.133333 34.133333 0 0 1-21.435733-64.682667l3.754666-1.262933 113.800534-30.481067-6.314667-6.0416A339.968 339.968 0 0 0 512 170.666667C323.4816 170.666667 170.666667 323.4816 170.666667 512s152.814933 341.333333 341.333333 341.333333 341.333333-152.814933 341.333333-341.333333a34.133333 34.133333 0 0 1 68.266667 0c0 226.2016-183.3984 409.6-409.6 409.6S102.4 738.2016 102.4 512 285.7984 102.4 512 102.4c104.0384 0 202.001067 39.0144 276.923733 107.793067l-32.699733-121.9584a34.133333 34.133333 0 0 1 20.3776-40.5504l3.754667-1.262934a34.133333 34.133333 0 0 1 40.584533 20.343467z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconSctpShuaxin.defaultProps = {
  size: 18,
};

YpIconSctpShuaxin = React.memo ? React.memo(YpIconSctpShuaxin) : YpIconSctpShuaxin;

export default YpIconSctpShuaxin;
