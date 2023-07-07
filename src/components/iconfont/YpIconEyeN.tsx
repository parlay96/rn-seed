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

let YpIconEyeN: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M762.965333 823.338667A467.157333 467.157333 0 0 1 512 896c-230.058667 0-421.461333-165.546667-461.610667-384a468.565333 468.565333 0 0 1 142.506667-258.816L59.392 119.808l60.373333-60.373333 844.757334 844.8-60.373334 60.330666-141.226666-141.226666h0.042666zM253.226667 313.6A382.506667 382.506667 0 0 0 137.514667 512a384.213333 384.213333 0 0 0 563.242666 249.088l-86.528-86.528A192 192 0 0 1 349.44 409.770667L253.226667 313.6z m297.770666 297.728l-138.325333-138.325333a106.666667 106.666667 0 0 0 138.282667 138.282666l0.042666 0.042667z m336.768 96.597333l-61.056-61.013333A381.226667 381.226667 0 0 0 886.485333 512 384.213333 384.213333 0 0 0 407.552 227.754667L340.224 160.426667C393.429333 139.52 451.413333 128 512 128c230.058667 0 421.461333 165.546667 461.610667 384a467.072 467.072 0 0 1-85.845334 195.925333z m-387.584-387.584a192 192 0 0 1 203.477334 203.477334l-203.52-203.477334h0.042666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconEyeN.defaultProps = {
  size: 18,
};

YpIconEyeN = React.memo ? React.memo(YpIconEyeN) : YpIconEyeN;

export default YpIconEyeN;
