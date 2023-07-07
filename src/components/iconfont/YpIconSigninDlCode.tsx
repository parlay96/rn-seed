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

let YpIconSigninDlCode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 170.666667H213.333333v682.666666h597.333334V341.333333h-128a42.666667 42.666667 0 0 1-42.666667-42.666666V170.666667zM128 127.658667C128 104.277333 147.072 85.333333 170.624 85.333333h476.714667a85.333333 85.333333 0 0 1 60.330666 25.002667l163.328 163.328A85.333333 85.333333 0 0 1 896 333.994667v561.706666A42.666667 42.666667 0 0 1 853.632 938.666667H170.368A42.666667 42.666667 0 0 1 128 896.341333V127.658667z m595.2 414.506666l-90.538667 90.538667a42.666667 42.666667 0 0 1-56.32 3.541333l-4.010666-3.584a42.709333 42.709333 0 0 1 0-60.330666L632.661333 512l-60.288-60.330667a42.666667 42.666667 0 0 1 56.234667-63.957333l4.053333 3.584 90.538667 90.538667a42.666667 42.666667 0 0 1 0 60.330666z m-422.4-60.330666l90.581333-90.538667a42.666667 42.666667 0 0 1 56.32-3.541333l4.010667 3.584a42.666667 42.666667 0 0 1 0 60.330666L391.338667 512l60.288 60.330667a42.666667 42.666667 0 0 1-56.234667 63.957333l-4.053333-3.584-90.538667-90.538667a42.666667 42.666667 0 0 1-3.541333-56.32l3.541333-4.010666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconSigninDlCode.defaultProps = {
  size: 18,
};

YpIconSigninDlCode = React.memo ? React.memo(YpIconSigninDlCode) : YpIconSigninDlCode;

export default YpIconSigninDlCode;
