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

let YpIconMapDwuser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M721.237333 256.256a298.666667 298.666667 0 0 0-426.154666 418.389333A255.829333 255.829333 0 0 1 512 554.666667c88.149333 0 170.069333 45.226667 216.917333 119.978666a298.666667 298.666667 0 0 0-7.68-418.389333z m-269.653333 695.808L240.554667 740.864a384 384 0 1 1 543.061333 0l-211.2 211.2a85.333333 85.333333 0 0 1-120.661333 0zM512 512a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconMapDwuser.defaultProps = {
  size: 18,
};

YpIconMapDwuser = React.memo ? React.memo(YpIconMapDwuser) : YpIconMapDwuser;

export default YpIconMapDwuser;
