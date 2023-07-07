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

let YpIconHyzxLxkf: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96a288 288 0 0 1 287.872 279.52L800 384v32h32a96 96 0 0 1 95.84 90.368L928 512v64a96 96 0 0 1-90.368 95.84L832 672h-33.76c-15.936 144-138.016 256-286.24 256a32 32 0 0 1 0-64 224 224 0 0 0 223.872-216.32L736 640v-256a224 224 0 0 0-447.872-7.68L288 384v256a32 32 0 0 1-28.256 31.776L256 672H192a96 96 0 0 1-95.84-90.368L96 576v-64a96 96 0 0 1 90.368-95.84L192 416h32v-32a288 288 0 0 1 288-288z m-73.376 489.376c14.688 14.656 38.56 22.624 73.376 22.624s58.688-7.968 73.376-22.624a32 32 0 0 1 45.248 45.248C602.624 658.624 562.496 672 512 672c-50.496 0-90.624-13.376-118.624-41.376a32 32 0 0 1 45.248-45.248zM224 480H192a32 32 0 0 0-31.168 24.64l-0.64 3.616L160 512v64a32 32 0 0 0 28.256 31.776L192 608h32v-128z m608 0h-32v128h32a32 32 0 0 0 31.776-28.256L864 576v-64a32 32 0 0 0-28.256-31.776L832 480z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconHyzxLxkf.defaultProps = {
  size: 18,
};

YpIconHyzxLxkf = React.memo ? React.memo(YpIconHyzxLxkf) : YpIconHyzxLxkf;

export default YpIconHyzxLxkf;
