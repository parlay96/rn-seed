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

let YpIconPopSmile: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M99.882667 873.216l35.626666-160.298667A424.789333 424.789333 0 0 1 85.333333 512C85.333333 276.352 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667a424.789333 424.789333 0 0 1-200.917333-50.176l-160.298667 35.626666a42.666667 42.666667 0 0 1-50.901333-50.901333zM298.666667 512a213.333333 213.333333 0 0 0 426.666666 0h-85.333333a128 128 0 0 1-256 0H298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconPopSmile.defaultProps = {
  size: 18,
};

YpIconPopSmile = React.memo ? React.memo(YpIconPopSmile) : YpIconPopSmile;

export default YpIconPopSmile;
