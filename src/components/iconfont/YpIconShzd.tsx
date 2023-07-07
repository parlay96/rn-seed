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

let YpIconShzd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M362.56 853.312h298.88A278.336 278.336 0 0 1 512 1002.752a278.336 278.336 0 0 1-149.44-149.44zM768 631.68l85.312 96.768v82.24H170.688v-82.24L256 631.68V384C256 235.392 362.88 108.928 512 62.08c149.12 46.848 256 173.312 256 321.92v247.68zM512 469.312a85.312 85.312 0 1 0 0-170.624 85.312 85.312 0 0 0 0 170.624z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconShzd.defaultProps = {
  size: 18,
};

YpIconShzd = React.memo ? React.memo(YpIconShzd) : YpIconShzd;

export default YpIconShzd;
