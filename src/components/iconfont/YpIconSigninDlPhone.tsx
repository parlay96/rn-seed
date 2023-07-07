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

let YpIconSigninDlPhone: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 170.666667v682.666666h512V170.666667H256zM213.333333 85.333333h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v768a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V128a42.666667 42.666667 0 0 1 42.666666-42.666667z m213.333334 597.333334h170.666666a42.666667 42.666667 0 0 1 0 85.333333h-170.666666a42.666667 42.666667 0 0 1 0-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconSigninDlPhone.defaultProps = {
  size: 18,
};

YpIconSigninDlPhone = React.memo ? React.memo(YpIconSigninDlPhone) : YpIconSigninDlPhone;

export default YpIconSigninDlPhone;
