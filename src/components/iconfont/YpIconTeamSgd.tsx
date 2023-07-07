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

let YpIconTeamSgd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M469.333333 298.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h384a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-768A42.666667 42.666667 0 0 1 85.333333 853.333333V341.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h341.333333zM213.333333 682.666667v85.333333H426.666667V682.666667H213.333333zM597.333333 682.666667v85.333333h213.333334V682.666667H597.333333z m0-128v85.333333h213.333334v-85.333333H597.333333zM597.333333 426.666667v85.333333h213.333334V426.666667H597.333333zM213.333333 554.666667v85.333333H426.666667v-85.333333H213.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconTeamSgd.defaultProps = {
  size: 18,
};

YpIconTeamSgd = React.memo ? React.memo(YpIconTeamSgd) : YpIconTeamSgd;

export default YpIconTeamSgd;
