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

let YpIconMasageEdit13: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m128 0l768 0q128 0 128 128l0 768q0 128-128 128l-768 0q-128 0-128-128l0-768q0-128 128-128Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M800 232H224A56 56 0 0 0 168 288v448c0 30.944 25.056 56 56 56h576A56 56 0 0 0 856 736V288A56 56 0 0 0 800 232zM224 280h576a8 8 0 0 1 8 8v448a8 8 0 0 1-8 8H224a8 8 0 0 1-8-8V288A8 8 0 0 1 224 280z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M832 360a24 24 0 0 1 3.264 47.776L832 408H192a24 24 0 0 1-3.264-47.776L192 360h640zM704 616a24 24 0 0 1 3.264 47.776L704 664h-144a24 24 0 0 1-3.264-47.776l3.264-0.224H704z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M832 264a24 24 0 0 1 23.776 20.736L856 288v256a24 24 0 0 1-47.776 3.264L808 544V288a24 24 0 0 1 24-24zM192 264a24 24 0 0 1 23.776 20.736L216 288v256a24 24 0 0 1-47.776 3.264L168 544V288A24 24 0 0 1 192 264z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

YpIconMasageEdit13.defaultProps = {
  size: 18,
};

YpIconMasageEdit13 = React.memo ? React.memo(YpIconMasageEdit13) : YpIconMasageEdit13;

export default YpIconMasageEdit13;
