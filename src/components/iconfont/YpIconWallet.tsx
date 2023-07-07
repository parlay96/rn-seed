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

let YpIconWallet: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M850.474667 136.533333a128 128 0 0 1 128 128v494.933334a128 128 0 0 1-128 128H173.525333a128 128 0 0 1-128-128V264.533333a128 128 0 0 1 128-128h676.949334zM384.853333 573.312l-253.952 2.304V759.466667a42.666667 42.666667 0 0 0 37.674667 42.368l4.992 0.298666h676.949333a42.666667 42.666667 0 0 0 42.410667-37.674666l0.256-4.992v-183.765334h-251.776l-106.496 65.450667a42.666667 42.666667 0 0 1-45.44-0.469333l-104.618667-67.413334z m508.330667-161.450667H130.858667v81.834667l253.952-2.304 104.32 67.328a42.666667 42.666667 0 0 0 45.44 0.554667l106.794666-65.493334h251.733334v-81.92z m-42.666667-189.994666H173.525333a42.666667 42.666667 0 0 0-42.410666 37.674666l-0.256 4.992v65.408h762.282666V264.533333a42.666667 42.666667 0 0 0-37.674666-42.368l-4.992-0.298666z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".85"
      />
    </Svg>
  );
};

YpIconWallet.defaultProps = {
  size: 18,
};

YpIconWallet = React.memo ? React.memo(YpIconWallet) : YpIconWallet;

export default YpIconWallet;
