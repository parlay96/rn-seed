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

let YpIconShareTbDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 512c0 282.7776 229.2224 512 512 512s512-229.2224 512-512S794.7776 0 512 0 0 229.2224 0 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M621.9008 263.5008l112.9984 112.9984a25.6 25.6 0 0 1 7.5008 18.0992v348.0064a25.4208 25.4208 0 0 1-25.4208 25.3952H307.0208a25.6 25.6 0 0 1-25.4208-25.3952V281.3952c0-14.0288 11.392-25.3952 25.4208-25.3952h296.7808a25.6 25.6 0 0 1 18.0992 7.5008zM537.6 512v-76.8a25.6 25.6 0 0 0-51.2 0v76.8h-45.9008a12.8 12.8 0 0 0-9.0368 21.8624l62.4384 62.4384a25.6 25.6 0 0 0 36.1984 0l62.464-62.464a12.8 12.8 0 0 0-9.0624-21.8368H537.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconShareTbDown.defaultProps = {
  size: 18,
};

YpIconShareTbDown = React.memo ? React.memo(YpIconShareTbDown) : YpIconShareTbDown;

export default YpIconShareTbDown;
