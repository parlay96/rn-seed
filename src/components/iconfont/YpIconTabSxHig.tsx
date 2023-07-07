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

let YpIconTabSxHig: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M225.792 712.874667a42.666667 42.666667 0 0 0 54.442667 4.864l5.973333-4.864L512 486.997333l225.792 225.877334a42.666667 42.666667 0 0 0 54.442667 4.864l5.973333-4.864a42.666667 42.666667 0 0 0 4.864-54.442667l-4.864-5.973333-256-256a42.666667 42.666667 0 0 0-54.442667-4.864l-5.973333 4.864-256 256a42.666667 42.666667 0 0 0 0 60.416z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconTabSxHig.defaultProps = {
  size: 18,
};

YpIconTabSxHig = React.memo ? React.memo(YpIconTabSxHig) : YpIconTabSxHig;

export default YpIconTabSxHig;
