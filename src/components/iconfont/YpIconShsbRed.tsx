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

let YpIconShsbRed: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 554.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v42.666666a42.666667 42.666667 0 0 0 85.333334 0v-42.666666a42.666667 42.666667 0 0 0-42.666667-42.666667z m0-384a42.666667 42.666667 0 0 0-42.666667 42.666667v256a42.666667 42.666667 0 0 0 85.333334 0V298.666667a42.666667 42.666667 0 0 0-42.666667-42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconShsbRed.defaultProps = {
  size: 18,
};

YpIconShsbRed = React.memo ? React.memo(YpIconShsbRed) : YpIconShsbRed;

export default YpIconShsbRed;
