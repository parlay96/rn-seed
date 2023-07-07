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

let YpIconGohome: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 800H288a32 32 0 0 1-32-32v-288H201.376a16 16 0 0 1-10.752-27.84l299.84-272.576a32 32 0 0 1 43.072 0l299.84 272.576a16 16 0 0 1-10.752 27.84H768v288a32 32 0 0 1-32 32z m-416-64h384v-314.976l-192-174.528-192 174.528V736z m64-128h256v64h-256v-64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".85"
      />
    </Svg>
  );
};

YpIconGohome.defaultProps = {
  size: 18,
};

YpIconGohome = React.memo ? React.memo(YpIconGohome) : YpIconGohome;

export default YpIconGohome;
