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

let YpIconMasageEdit10: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m128 0l768 0q128 0 128 128l0 768q0 128-128 128l-768 0q-128 0-128-128l0-768q0-128 128-128Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M800 232H224A56 56 0 0 0 168 288v448c0 30.912 25.088 56 56 56h576A56 56 0 0 0 856 736V288A56 56 0 0 0 800 232zM224 280h576a8 8 0 0 1 8 8v448a8 8 0 0 1-8 8H224a8 8 0 0 1-8-8V288A8 8 0 0 1 224 280z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M704 360h-128a24 24 0 0 0-24 24v128c0 13.248 10.752 24 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0-24-24z m-24 48v80h-80v-80h80zM704 616a24 24 0 0 1 3.264 47.776L704 664H320a24 24 0 0 1-3.264-47.776L320 616h384zM416 360a24 24 0 0 1 3.264 47.776L416 408h-96a24 24 0 0 1-3.264-47.776L320 360h96zM416 488a24 24 0 0 1 3.264 47.776L416 536h-96a24 24 0 0 1-3.264-47.776L320 488h96z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpIconMasageEdit10.defaultProps = {
  size: 18,
};

YpIconMasageEdit10 = React.memo ? React.memo(YpIconMasageEdit10) : YpIconMasageEdit10;

export default YpIconMasageEdit10;
