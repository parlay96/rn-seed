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

let YpIconRzGtsh: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M85.333333 938.666667a341.333333 341.333333 0 1 1 682.666667 0H85.333333z m341.333334-384a256 256 0 1 1 0-512 256 256 0 1 1 0 512z m314.112 95.317333A320.170667 320.170667 0 0 1 980.650667 938.666667H853.333333c0-111.36-42.666667-212.736-112.554666-288.682667zM654.506667 552.874667A340.48 340.48 0 0 0 768 298.666667a339.797333 339.797333 0 0 0-43.349333-166.570667 213.333333 213.333333 0 0 1-70.144 420.693333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconRzGtsh.defaultProps = {
  size: 18,
};

YpIconRzGtsh = React.memo ? React.memo(YpIconRzGtsh) : YpIconRzGtsh;

export default YpIconRzGtsh;
