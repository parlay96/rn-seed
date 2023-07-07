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

let YpIconSmrzKsfb: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M717.7216 102.4L921.6 310.1184V870.4a51.2 51.2 0 0 1-51.2 51.2H204.8a51.2 51.2 0 0 1-51.2-51.2V153.6a51.2 51.2 0 0 1 51.2-51.2h512.9216zM665.6 179.2H230.4v665.6h614.4V358.4H665.6V179.2z m-112.0256 180.992a25.6 25.6 0 0 1 9.6256 19.968V486.4a25.6 25.6 0 0 0 25.6 25.6h74.752a25.6 25.6 0 0 1 19.968 41.6256l-125.952 157.44a25.6 25.6 0 0 1-45.568-15.9744V588.8a25.6 25.6 0 0 0-25.6-25.6H411.648a25.6 25.6 0 0 1-19.968-41.5744l125.952-157.44a25.6 25.6 0 0 1 35.9424-3.9936z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".85"
      />
    </Svg>
  );
};

YpIconSmrzKsfb.defaultProps = {
  size: 18,
};

YpIconSmrzKsfb = React.memo ? React.memo(YpIconSmrzKsfb) : YpIconSmrzKsfb;

export default YpIconSmrzKsfb;
