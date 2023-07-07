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

let YpIconVideoPhoto: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 1 0 682.666666 341.333333 341.333333 0 0 1 0-682.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M619.861333 426.666667c-98.048 0-218.154667 56.874667-368.725333 167.253333l-27.52 20.565333-29.269333 22.528-26.496 69.845334 26.496 68.693333C272.426667 880.213333 355.797333 938.666667 489.514667 938.666667c178.645333 0 335.701333-112.810667 393.557333-277.930667L896 623.786667l-20.48-33.450667C810.837333 484.864 724.224 426.666667 619.861333 426.666667z m1.749334 85.333333c74.112 0 156.16 40.746667 208.085333 122.197333-46.506667 127.573333-192.426667 219.136-341.674667 219.136-112.597333 0-212.48-52.053333-274.688-132.394666l25.002667-19.072 28.458667-21.077334 27.648-19.84 29.653333-20.522666c126.506667-85.632 225.706667-128.426667 297.514667-128.426667z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M405.333333 362.666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpIconVideoPhoto.defaultProps = {
  size: 18,
};

YpIconVideoPhoto = React.memo ? React.memo(YpIconVideoPhoto) : YpIconVideoPhoto;

export default YpIconVideoPhoto;
