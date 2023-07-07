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

let YpImagesWwl: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 128c182.784 0 350.72 63.872 482.56 170.496l-53.632 66.389333A679.936 679.936 0 0 0 512 213.333333a679.210667 679.210667 0 0 0-359.210667 102.058667L512 760.192l256-316.970667v135.808L512 896 29.44 298.538667C161.28 191.872 329.130667 128 512 128z m426.666667 682.666667v85.333333h-85.333334v-85.333333h85.333334z m0-384v298.666666h-85.333334V426.666667h85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpImagesWwl.defaultProps = {
  size: 18,
};

YpImagesWwl = React.memo ? React.memo(YpImagesWwl) : YpImagesWwl;

export default YpImagesWwl;
