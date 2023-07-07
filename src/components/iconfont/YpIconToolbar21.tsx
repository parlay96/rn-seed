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

let YpIconToolbar21: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333c220.586667 0 402.816 167.68 424.533333 384H938.666667a42.666667 42.666667 0 0 1 4.992 85.034667l-4.352 0.298667H896a384 384 0 0 1-767.829333 11.306666L128 554.666667H85.333333a42.666667 42.666667 0 0 1-4.992-85.034667L87.466667 469.333333C108.842667 253.738667 290.773333 85.333333 512 85.333333z m298.666667 469.333334H213.333333a298.666667 298.666667 0 0 0 597.162667 10.24L810.666667 554.666667zM346.325333 213.504a341.76 341.76 0 0 0-169.6 234.026667l-2.090666 12.16-1.322667 9.642666h204.970667l-31.957334-255.829333z m331.306667 0L645.674667 469.333333h205.013333l-1.28-9.216a341.461333 341.461333 0 0 0-171.776-246.613333zM512 170.666667c-28.885333 0-56.917333 3.584-83.712 10.325333L464.341333 469.333333h95.274667l36.053333-288.341333a340.693333 340.693333 0 0 0-62.037333-9.642667l-11.008-0.512L512 170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M640 640a128 128 0 0 1-256 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar21.defaultProps = {
  size: 18,
};

YpIconToolbar21 = React.memo ? React.memo(YpIconToolbar21) : YpIconToolbar21;

export default YpIconToolbar21;
