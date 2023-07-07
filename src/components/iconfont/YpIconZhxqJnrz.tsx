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

let YpIconZhxqJnrz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.312 650.432v293.248a21.312 21.312 0 0 1-32.256 18.304L512 853.312l-181.056 108.672a21.312 21.312 0 0 1-32.256-18.368v-293.12a341.312 341.312 0 1 1 426.624 0zM384 700.48v130.176l128-76.8 128 76.8v-130.176a340.416 340.416 0 0 1-128 24.832 340.416 340.416 0 0 1-128-24.832zM512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".65"
      />
    </Svg>
  );
};

YpIconZhxqJnrz.defaultProps = {
  size: 18,
};

YpIconZhxqJnrz = React.memo ? React.memo(YpIconZhxqJnrz) : YpIconZhxqJnrz;

export default YpIconZhxqJnrz;
