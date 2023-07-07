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

let YpIconMapBus: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 853.333333H298.666667v42.666667a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-384H85.333333V341.333333h42.666667V213.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h597.333334a85.333333 85.333333 0 0 1 85.333333 85.333333v128h42.666667v170.666667h-42.666667v384a42.666667 42.666667 0 0 1-42.666667 42.666667h-85.333333a42.666667 42.666667 0 0 1-42.666667-42.666667v-42.666667zM213.333333 213.333333v298.666667h597.333334V213.333333H213.333333z m106.666667 554.666667a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m384 0a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconMapBus.defaultProps = {
  size: 18,
};

YpIconMapBus = React.memo ? React.memo(YpIconMapBus) : YpIconMapBus;

export default YpIconMapBus;
