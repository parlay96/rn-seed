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

let YpIconHyzxtsXxws: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 938.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v768a42.666667 42.666667 0 0 1-42.666667 42.666667zM341.333333 298.666667v85.333333h341.333334V298.666667H341.333333z m0 170.666666v85.333334h341.333334v-85.333334H341.333333z m0 170.666667v85.333333h213.333334v-85.333333H341.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconHyzxtsXxws.defaultProps = {
  size: 18,
};

YpIconHyzxtsXxws = React.memo ? React.memo(YpIconHyzxtsXxws) : YpIconHyzxtsXxws;

export default YpIconHyzxtsXxws;
