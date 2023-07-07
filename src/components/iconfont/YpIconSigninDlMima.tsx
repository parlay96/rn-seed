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

let YpIconSigninDlMima: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 426.666667h42.666666a42.666667 42.666667 0 0 1 42.666667 42.666666v426.666667a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V469.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h42.666666V384a298.666667 298.666667 0 0 1 597.333334 0v42.666667zM213.333333 512v341.333333h597.333334v-341.333333H213.333333z m298.666667 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333334 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z m213.333333-170.666666V384A213.333333 213.333333 0 0 0 298.666667 384v42.666667h426.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconSigninDlMima.defaultProps = {
  size: 18,
};

YpIconSigninDlMima = React.memo ? React.memo(YpIconSigninDlMima) : YpIconSigninDlMima;

export default YpIconSigninDlMima;
