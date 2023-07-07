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

let YpIconCall12Px: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M597.589333 665.429333c10.24-5.632 18.773333-9.813333 27.306667-13.312 59.733333-24.490667 112.469333-7.168 182.186667 66.133334 43.093333 45.482667 55.893333 85.76 39.253333 121.6-12.458667 26.794667-36.352 45.226667-78.848 68.096-2.730667 1.536-27.306667 14.336-33.536 17.834666-98.986667 55.04-325.973333-70.826667-489.130667-286.037333C81.237333 424.021333 38.912 194.048 139.178667 138.24l13.226666-7.509333 14.421334-8.448c50.688-29.525333 83.2-41.386667 121.685333-35.498667 38.4 5.973333 71.168 31.573333 98.816 78.165333 58.282667 98.730667 45.482667 145.493333-29.610667 188.074667-5.376 3.157333-24.576 13.568-26.368 14.506667-18.346667 10.24 12.8 78.933333 85.162667 174.336 73.386667 96.597333 134.570667 149.333333 154.624 138.24l26.453333-14.677334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconCall12Px.defaultProps = {
  size: 18,
};

YpIconCall12Px = React.memo ? React.memo(YpIconCall12Px) : YpIconCall12Px;

export default YpIconCall12Px;
