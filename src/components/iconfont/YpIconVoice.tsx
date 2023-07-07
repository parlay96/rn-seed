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

let YpIconVoice: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M662.869333 105.130667A213.333333 213.333333 0 0 1 725.333333 256v170.666667a213.333333 213.333333 0 0 1-426.666666 0V256a213.333333 213.333333 0 0 1 364.202666-150.869333zM130.346667 469.333333H216.32a298.752 298.752 0 0 0 591.274667 0h86.016A384.170667 384.170667 0 0 1 554.666667 808.32V981.333333h-85.333334v-173.013333A384.170667 384.170667 0 0 1 130.346667 469.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconVoice.defaultProps = {
  size: 18,
};

YpIconVoice = React.memo ? React.memo(YpIconVoice) : YpIconVoice;

export default YpIconVoice;
