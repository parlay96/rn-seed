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

let YpBianji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M243.232 639.8848L192 832l192.1152-54.432 304.1856-304.1856-140.8864-134.48-304.1824 300.9824z m419.456-419.456L589.0368 297.28l140.8864 137.6832 73.6448-73.6448c38.4224-38.4224 38.4224-99.2608 0-137.6832-38.4224-41.6256-102.464-41.6256-140.8864-3.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpBianji.defaultProps = {
  size: 18,
};

YpBianji = React.memo ? React.memo(YpBianji) : YpBianji;

export default YpBianji;
