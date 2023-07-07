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

let YpIconHyzxtsSmrz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M158.933333 163.114667l335.616-75.776c11.52-2.56 23.424-2.56 34.901334 0l335.616 75.818666A39.594667 39.594667 0 0 1 896 201.813333V597.333333c0 79.445333-39.637333 153.6-105.557333 197.674667l-239.061334 137.045333a79.189333 79.189333 0 0 1-78.762666 0l-239.061334-137.045333A237.781333 237.781333 0 0 1 128 597.333333V201.813333c0-18.602667 12.842667-34.645333 30.933333-38.698666z m451.84 213.205333A98.901333 98.901333 0 0 0 512 277.333333a98.901333 98.901333 0 0 0-98.773333 98.986667A98.901333 98.901333 0 0 0 512 475.306667a98.901333 98.901333 0 0 0 98.773333-98.986667zM704 682.666667c0-85.333333-85.333333-170.666667-192-170.666667s-192 85.333333-192 170.666667h384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconHyzxtsSmrz.defaultProps = {
  size: 18,
};

YpIconHyzxtsSmrz = React.memo ? React.memo(YpIconHyzxtsSmrz) : YpIconHyzxtsSmrz;

export default YpIconHyzxtsSmrz;
