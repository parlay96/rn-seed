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

let YpIconTabSxNor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M225.792 396.458667a42.666667 42.666667 0 0 1 54.442667-4.864l5.973333 4.864L512 622.336l225.792-225.877333a42.666667 42.666667 0 0 1 54.442667-4.864l5.973333 4.864a42.666667 42.666667 0 0 1 4.864 54.442666l-4.864 5.973334-256 256a42.666667 42.666667 0 0 1-54.442667 4.864l-5.973333-4.864-256-256a42.666667 42.666667 0 0 1 0-60.416z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconTabSxNor.defaultProps = {
  size: 18,
};

YpIconTabSxNor = React.memo ? React.memo(YpIconTabSxNor) : YpIconTabSxNor;

export default YpIconTabSxNor;
