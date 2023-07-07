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

let YpIconCamChange: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.333333 853.333333v82.432a21.333333 21.333333 0 0 1-34.986666 16.426667l-175.786667-146.474667A21.333333 21.333333 0 0 1 144.298667 768H768a85.333333 85.333333 0 0 0 85.333333-85.333333V341.333333h85.333334v341.333334a170.666667 170.666667 0 0 1-170.666667 170.666666H341.333333z m341.333334-682.666666V88.234667a21.333333 21.333333 0 0 1 34.986666-16.426667l175.786667 146.474667a21.333333 21.333333 0 0 1-13.696 37.717333H256a85.333333 85.333333 0 0 0-85.333333 85.333333v341.333334H85.333333V341.333333a170.666667 170.666667 0 0 1 170.666667-170.666666h426.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconCamChange.defaultProps = {
  size: 18,
};

YpIconCamChange = React.memo ? React.memo(YpIconCamChange) : YpIconCamChange;

export default YpIconCamChange;
