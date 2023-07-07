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

let YpIconFbzgLsfb: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M298.666667 256V128a42.666667 42.666667 0 0 1 42.666666-42.666667h512a42.666667 42.666667 0 0 1 42.666667 42.666667v597.333333a42.666667 42.666667 0 0 1-42.666667 42.666667h-128v128c0 23.552-19.2 42.666667-42.965333 42.666667H170.965333A42.709333 42.709333 0 0 1 128 896l0.128-597.333333c0-23.552 19.2-42.666667 42.922667-42.666667H298.666667zM213.418667 341.333333L213.333333 853.333333h426.666667V341.333333H213.418667zM384 256h341.333333v426.666667h85.333334V170.666667H384v85.333333z m-85.333333 213.333333h256v85.333334H298.666667v-85.333334z m0 170.666667h256v85.333333H298.666667v-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconFbzgLsfb.defaultProps = {
  size: 18,
};

YpIconFbzgLsfb = React.memo ? React.memo(YpIconFbzgLsfb) : YpIconFbzgLsfb;

export default YpIconFbzgLsfb;
