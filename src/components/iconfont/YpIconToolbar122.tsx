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

let YpIconToolbar122: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M667.34459259-5.81530905H356.65540741a155.34459259 155.34459259 0 0 0-155.34459259 155.3445926v207.12612386h621.37837036V149.52928355a155.34459259 155.34459259 0 0 0-155.34459259-155.3445926z m0 103.56306254l6.05843911 0.3624699A51.78153127 51.78153127 0 0 1 719.12612386 149.52928355v103.56306253H304.87387614V149.52928355a51.78153127 51.78153127 0 0 1 51.78153127-51.78153006h310.68918518z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M97.74775349 253.09234608h828.50449302a103.56306132 103.56306132 0 0 1 103.56306254 103.56306133v569.5968391a103.56306132 103.56306132 0 0 1-103.56306254 103.56306254H97.74775349a103.56306132 103.56306132 0 0 1-103.56306254-103.56306254V356.65540741a103.56306132 103.56306132 0 0 1 103.56306254-103.56306133z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M304.87387614 460.21846873h414.25224772a51.78153127 51.78153127 0 0 1 0 103.56306254H304.87387614a51.78153127 51.78153127 0 0 1 0-103.56306254z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar122.defaultProps = {
  size: 18,
};

YpIconToolbar122 = React.memo ? React.memo(YpIconToolbar122) : YpIconToolbar122;

export default YpIconToolbar122;
