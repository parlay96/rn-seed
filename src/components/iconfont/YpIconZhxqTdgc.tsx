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

let YpIconZhxqTdgc: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M85.12 170.688c0-47.04 38.08-85.12 85.12-85.12l683.072-0.256c47.04 0 85.12 38.144 85.12 85.12l0.256 682.88a85.12 85.12 0 0 1-85.12 85.12l-683.136 0.256a85.12 85.12 0 0 1-85.12-85.12L85.12 170.688z m85.312 0.192l0.256 682.432 682.624-0.192-0.192-682.432-682.688 0.192z m94.976 563.072a298.432 298.432 0 0 1 250.944-136.64c102.4 0 192.704 51.52 246.528 130.048-23.04 16.96-47.616 31.616-73.6 43.712a213.056 213.056 0 0 0-172.928-88.384 213.12 213.12 0 0 0-176.192 92.992 425.92 425.92 0 0 1-74.752-41.728zM382.72 480a149.312 149.312 0 1 1 258.688-149.312A149.312 149.312 0 0 1 382.656 480zM512 469.312a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".65"
      />
    </Svg>
  );
};

YpIconZhxqTdgc.defaultProps = {
  size: 18,
};

YpIconZhxqTdgc = React.memo ? React.memo(YpIconZhxqTdgc) : YpIconZhxqTdgc;

export default YpIconZhxqTdgc;
