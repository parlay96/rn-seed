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

let YpIconTeamBz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 469.333333A213.333333 213.333333 0 0 1 725.333333 682.666667v256h-426.666666V682.666667A213.333333 213.333333 0 0 1 512 469.333333zM225.621333 597.589333c-6.826667 22.869333-10.837333 46.506667-11.946666 70.4L213.333333 682.666667v256H85.333333V746.666667a149.333333 149.333333 0 0 1 133.12-148.48l7.168-0.597334z m572.757334 0A149.333333 149.333333 0 0 1 938.666667 746.666667V938.666667H810.666667V682.666667c0-29.525333-4.266667-58.112-12.288-85.077334zM234.666667 341.333333a106.666667 106.666667 0 1 1 0 213.333334 106.666667 106.666667 0 0 1 0-213.333334z m554.666666 0a106.666667 106.666667 0 1 1 0 213.333334 106.666667 106.666667 0 0 1 0-213.333334zM512 85.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconTeamBz.defaultProps = {
  size: 18,
};

YpIconTeamBz = React.memo ? React.memo(YpIconTeamBz) : YpIconTeamBz;

export default YpIconTeamBz;
