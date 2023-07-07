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

let YpIconMapDwjt: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M451.669333 952.064L240.469333 740.864a384 384 0 1 1 543.061334 0l-211.2 211.2a85.333333 85.333333 0 0 1-120.661334 0zM512 554.666667a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconMapDwjt.defaultProps = {
  size: 18,
};

YpIconMapDwjt = React.memo ? React.memo(YpIconMapDwjt) : YpIconMapDwjt;

export default YpIconMapDwjt;
