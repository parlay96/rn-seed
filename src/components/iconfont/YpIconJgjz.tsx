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

let YpIconJgjz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 344.234667l-64 64V256H448v117.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H288V768h448v-88.234667l64-64v184.490667a31.786667 31.786667 0 0 1-31.786667 31.744H255.786667a32 32 0 0 1-31.786667-32.213333V419.370667a85.333333 85.333333 0 0 1 25.002667-60.373334l142.08-142.037333A85.333333 85.333333 0 0 1 451.413333 192h316.501334c17.706667 0 32.085333 14.549333 32.085333 31.744v120.490667z m47.530667 133.504L621.226667 704l-45.312-0.085333 0.085333-45.184 226.261333-226.261334a32 32 0 1 1 45.226667 45.226667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconJgjz.defaultProps = {
  size: 18,
};

YpIconJgjz = React.memo ? React.memo(YpIconJgjz) : YpIconJgjz;

export default YpIconJgjz;
