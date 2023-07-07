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

let YpIconHyzxBzyfk: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z m0 64C317.6 160 160 317.6 160 512s157.6 352 352 352 352-157.6 352-352S706.4 160 512 160z m0 480a32 32 0 0 1 32 32v32a32 32 0 0 1-64 0v-32a32 32 0 0 1 32-32z m0-352c69.12 0 128 58.88 128 128 0 40.544-13.568 64.256-52.544 98.56l-6.72 5.824c-29.984 25.472-36.384 36.768-36.8 49.824L544 576a32 32 0 0 1-63.776 3.744l-0.256-5.664c-0.704-32.224 11.776-60.288 52.608-96.64l11.968-10.336 8.96-8.032C572.32 441.6 576 432.768 576 416c0-33.76-30.24-64-64-64-33.76 0-64 30.24-64 64a32 32 0 0 1-64 0c0-69.12 58.88-128 128-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconHyzxBzyfk.defaultProps = {
  size: 18,
};

YpIconHyzxBzyfk = React.memo ? React.memo(YpIconHyzxBzyfk) : YpIconHyzxBzyfk;

export default YpIconHyzxBzyfk;
