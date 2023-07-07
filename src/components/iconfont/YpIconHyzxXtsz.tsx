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

let YpIconHyzxXtsz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M666.016 128a96 96 0 0 1 81.152 44.704l3.104 5.312 157.12 288a96 96 0 0 1 2.88 86.144l-2.88 5.824-157.12 288a96 96 0 0 1-78.08 49.824l-6.176 0.192h-308.032a96 96 0 0 1-81.152-44.704l-3.104-5.312-157.12-288a96 96 0 0 1-2.88-86.144l2.88-5.824 157.12-288a96 96 0 0 1 78.08-49.824L358.016 128h308.032z m0 64h-308.032a32 32 0 0 0-26.016 13.408l-2.08 3.264-157.088 288a32 32 0 0 0-1.696 26.976l1.696 3.68 157.12 288a32 32 0 0 0 24.224 16.448l3.84 0.224h308.032a32 32 0 0 0 26.016-13.408l2.08-3.264 157.088-288a32 32 0 0 0 1.696-26.976l-1.696-3.68-157.12-288a32 32 0 0 0-24.224-16.448L666.016 192zM512 352a160 160 0 1 1 0 320 160 160 0 0 1 0-320z m0 64a96 96 0 1 0 0 192 96 96 0 0 0 0-192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconHyzxXtsz.defaultProps = {
  size: 18,
};

YpIconHyzxXtsz = React.memo ? React.memo(YpIconHyzxXtsz) : YpIconHyzxXtsz;

export default YpIconHyzxXtsz;
