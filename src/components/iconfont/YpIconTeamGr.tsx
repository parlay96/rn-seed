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

let YpIconTeamGr: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 896H256a85.333333 85.333333 0 0 1-85.333333-85.333333A213.333333 213.333333 0 0 1 384 597.333333h256A213.333333 213.333333 0 0 1 853.333333 810.666667a85.333333 85.333333 0 0 1-85.333333 85.333333zM327.253333 448a213.333333 213.333333 0 1 1 369.493334-213.333333 213.333333 213.333333 0 0 1-369.493334 213.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconTeamGr.defaultProps = {
  size: 18,
};

YpIconTeamGr = React.memo ? React.memo(YpIconTeamGr) : YpIconTeamGr;

export default YpIconTeamGr;
