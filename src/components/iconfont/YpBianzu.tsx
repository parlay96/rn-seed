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

let YpBianzu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M498.773333 718.08l-169.813333 89.258667a28.444444 28.444444 0 0 1-41.272889-29.980445l32.426667-189.098666a28.444444 28.444444 0 0 0-8.192-25.173334l-137.386667-133.916444a28.444444 28.444444 0 0 1 15.758222-48.526222l189.866667-27.591112a28.444444 28.444444 0 0 0 21.418667-15.559111l84.906666-172.032a28.444444 28.444444 0 0 1 51.029334 0l84.906666 172.032a28.444444 28.444444 0 0 0 21.418667 15.559111l189.866667 27.591112a28.444444 28.444444 0 0 1 15.758222 48.526222l-137.386667 133.916444a28.444444 28.444444 0 0 0-8.192 25.173334l32.426667 189.098666a28.444444 28.444444 0 0 1-41.244445 29.980445l-169.813333-89.258667a28.444444 28.444444 0 0 0-26.481778 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpBianzu.defaultProps = {
  size: 18,
};

YpBianzu = React.memo ? React.memo(YpBianzu) : YpBianzu;

export default YpBianzu;
