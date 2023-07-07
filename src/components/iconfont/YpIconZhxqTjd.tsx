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

let YpIconZhxqTjd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M501.12 107.648L158.272 487.488l-7.488 20.48c-4.48 12.352-6.784 25.28-6.784 38.4l0.384 9.536c4.992 59.968 57.024 106.24 119.296 106.24h152.512l-39.552 183.168c-6.4 29.824 4.672 60.288 28.224 79.616 34.624 28.288 86.144 24.768 116.352-8.128l343.04-374.4 9.408-26.496c4.224-12.096 6.336-24.64 6.336-37.248l-0.384-9.6c-5.12-59.968-57.152-106.112-119.424-106.112H606.72l39.36-184.448c6.4-29.888-4.864-60.544-28.736-79.744a85.376 85.376 0 0 0-116.288 8.96zM241.984 537.92l300.224-332.544-37.568 176.256a64 64 0 0 0 49.28 75.904l3.904 0.704 5.44 0.576 3.968 0.128h192.96c13.76 0 23.808 9.472 23.808 19.712l-0.256 2.752-0.64 2.624-2.88 7.936-299.712 327.04 37.952-175.296a64 64 0 0 0-49.024-76.096l-6.72-1.088-6.784-0.32-192.192-0.064c-13.696 0-23.744-9.472-23.744-19.712l0.256-2.816 0.768-2.752 0.96-2.944z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".65"
      />
    </Svg>
  );
};

YpIconZhxqTjd.defaultProps = {
  size: 18,
};

YpIconZhxqTjd = React.memo ? React.memo(YpIconZhxqTjd) : YpIconZhxqTjd;

export default YpIconZhxqTjd;
