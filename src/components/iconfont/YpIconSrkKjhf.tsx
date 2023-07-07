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

let YpIconSrkKjhf: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M213.333333 341.333333a42.666667 42.666667 0 1 0 0-85.333333 42.666667 42.666667 0 0 0 0 85.333333z m0 213.333334a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667-298.666667h426.666667a42.666667 42.666667 0 0 1 0 85.333333H384a42.666667 42.666667 0 1 1 0-85.333333z m0 213.333333h426.666667a42.666667 42.666667 0 0 1 0 85.333334H384a42.666667 42.666667 0 0 1 0-85.333334z m-170.666667 298.666667a42.666667 42.666667 0 1 0 0-85.333333 42.666667 42.666667 0 0 0 0 85.333333z m170.666667-85.333333h426.666667a42.666667 42.666667 0 0 1 0 85.333333H384a42.666667 42.666667 0 0 1 0-85.333333z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

YpIconSrkKjhf.defaultProps = {
  size: 18,
};

YpIconSrkKjhf = React.memo ? React.memo(YpIconSrkKjhf) : YpIconSrkKjhf;

export default YpIconSrkKjhf;
