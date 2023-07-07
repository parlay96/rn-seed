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

let YpIconEyeY: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 128c230.058667 0 421.461333 165.546667 461.610667 384-40.106667 218.453333-231.552 384-461.610667 384-230.058667 0-421.461333-165.546667-461.610667-384C90.496 293.546667 281.941333 128 512 128z m0 682.666667c179.2 0 334.592-123.946667 374.485333-298.666667a384.213333 384.213333 0 0 0-748.970666 0A384.213333 384.213333 0 0 0 512 810.666667z m0-106.666667a192 192 0 1 1 0-384 192 192 0 0 1 0 384z m0-85.333333a106.666667 106.666667 0 1 0 0-213.333334 106.666667 106.666667 0 0 0 0 213.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconEyeY.defaultProps = {
  size: 18,
};

YpIconEyeY = React.memo ? React.memo(YpIconEyeY) : YpIconEyeY;

export default YpIconEyeY;
