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

let YpIconTost1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 704a64 64 0 1 0 0 128 64 64 0 0 0 0-128z m0-512a64 64 0 0 0-64 64v320a64 64 0 1 0 128 0V256a64 64 0 0 0-64-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconTost1.defaultProps = {
  size: 18,
};

YpIconTost1 = React.memo ? React.memo(YpIconTost1) : YpIconTost1;

export default YpIconTost1;
