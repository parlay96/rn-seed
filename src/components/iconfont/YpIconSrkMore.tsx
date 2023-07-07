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

let YpIconSrkMore: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M514.56 952.32c-241.737143 0-437.76-196.022857-437.76-437.76S272.822857 76.8 514.56 76.8s437.76 196.022857 437.76 437.76c-0.292571 241.664-196.096 437.467429-437.76 437.76z m0-804.937143a367.177143 367.177143 0 1 0 367.177143 367.177143c-0.256-202.678857-164.498286-366.921143-367.177143-367.177143zM512 349.001143c17.664 0 32 14.299429 32 32l-0.036571 99.035428h108.690285a32 32 0 1 1 0 64h-108.690285L544 658.285714a32 32 0 1 1-64 0l-0.036571-114.285714h-104.667429a32 32 0 1 1 0-64h104.667429l0.036571-99.035429c0-17.700571 14.336-32 32-32z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".85"
      />
    </Svg>
  );
};

YpIconSrkMore.defaultProps = {
  size: 18,
};

YpIconSrkMore = React.memo ? React.memo(YpIconSrkMore) : YpIconSrkMore;

export default YpIconSrkMore;
