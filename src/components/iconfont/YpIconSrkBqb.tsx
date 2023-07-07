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

let YpIconSrkBqb: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M514.56 952.32c-241.737143 0-437.76-196.022857-437.76-437.76S272.822857 76.8 514.56 76.8s437.76 196.022857 437.76 437.76c-0.292571 241.664-196.096 437.467429-437.76 437.76z m0-804.937143a367.177143 367.177143 0 1 0 367.177143 367.177143c-0.256-202.678857-164.498286-366.921143-367.177143-367.177143z m0 603.794286a221.001143 221.001143 0 0 1-220.745143-220.745143 35.328 35.328 0 0 1 70.582857 0 150.125714 150.125714 0 1 0 300.288 0 35.328 35.328 0 0 1 70.619429 0 221.001143 221.001143 0 0 1-220.745143 220.745143zM376.649143 369.737143a42.349714 42.349714 0 1 1-84.736 0 42.349714 42.349714 0 0 1 84.736 0z m356.571428 0a42.349714 42.349714 0 1 1-84.699428 0 42.349714 42.349714 0 0 1 84.662857 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".85"
      />
    </Svg>
  );
};

YpIconSrkBqb.defaultProps = {
  size: 18,
};

YpIconSrkBqb = React.memo ? React.memo(YpIconSrkBqb) : YpIconSrkBqb;

export default YpIconSrkBqb;
