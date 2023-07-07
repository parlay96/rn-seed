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

let YpIconFdjQyrz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M808.106667 736.853333l215.893333 215.893334-71.338667 71.253333-215.893333-215.893333A453.802667 453.802667 0 0 1 0 453.717333 453.802667 453.802667 0 0 1 453.802667 0 453.802667 453.802667 0 0 1 808.106667 736.853333z m-101.12-37.461333a352.768 352.768 0 0 0-253.269334-598.613333A352.768 352.768 0 0 0 100.693333 453.717333a352.768 352.768 0 0 0 598.613334 253.269334l7.594666-7.594667z m-303.786667-296.106667V252.074667h100.864v151.210666H655.36v100.778667H504.064V655.36H403.285333V504.064H252.074667V403.285333h151.210666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconFdjQyrz.defaultProps = {
  size: 18,
};

YpIconFdjQyrz = React.memo ? React.memo(YpIconFdjQyrz) : YpIconFdjQyrz;

export default YpIconFdjQyrz;
