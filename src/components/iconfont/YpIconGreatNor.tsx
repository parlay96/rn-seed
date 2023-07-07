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

let YpIconGreatNor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M622.933333 341.333333H896a85.333333 85.333333 0 0 1 85.333333 85.333334v89.770666a85.333333 85.333333 0 0 1-6.4 32.512l-132.053333 320.64a42.666667 42.666667 0 0 1-39.466667 26.410667H85.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V426.666667a42.666667 42.666667 0 0 1 42.666666-42.666667h148.565334a42.666667 42.666667 0 0 0 34.858666-18.048l200.96-284.714667a85.333333 85.333333 0 0 1 107.861334-27.136l28.202666 14.08a106.666667 106.666667 0 0 1 55.68 121.728L622.933333 341.333333zM298.666667 451.754667V810.666667h476.16L896 516.437333V426.666667h-273.066667a85.333333 85.333333 0 0 1-82.688-106.368l38.528-151.381334a21.333333 21.333333 0 0 0-11.136-24.362666 36.693333 36.693333 0 0 0-46.378666 11.690666L338.474667 415.146667c-10.666667 15.104-24.32 27.477333-39.808 36.608zM213.333333 469.333333H128v341.333334h85.333333v-341.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconGreatNor.defaultProps = {
  size: 18,
};

YpIconGreatNor = React.memo ? React.memo(YpIconGreatNor) : YpIconGreatNor;

export default YpIconGreatNor;
