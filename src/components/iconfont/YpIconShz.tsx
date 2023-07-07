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

let YpIconShz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m42.666667-426.666667V341.333333a42.666667 42.666667 0 0 0-85.333334 0v213.333334a42.666667 42.666667 0 0 0 42.666667 42.666666h170.666667a42.666667 42.666667 0 0 0 0-85.333333h-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconShz.defaultProps = {
  size: 18,
};

YpIconShz = React.memo ? React.memo(YpIconShz) : YpIconShz;

export default YpIconShz;
