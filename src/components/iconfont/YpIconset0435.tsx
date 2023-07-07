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

let YpIconset0435: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 640l-192 0L618.666667 128c0-46.933333-38.4-85.333333-85.333333-85.333333l-42.666667 0c-46.933333 0-85.333333 38.4-85.333333 85.333333l0 512-192 0c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 6.4 2.133333 10.666667 6.4 14.933333l298.666667 298.666667c4.266667 4.266667 8.533333 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933333-6.4l298.666667-298.666667c4.266667-4.266667 6.4-8.533333 6.4-14.933333C832 648.533333 823.466667 640 810.666667 640zM512 930.133333 264.533333 682.666667 448 682.666667 448 128c0-23.466667 19.2-42.666667 42.666667-42.666667l42.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667l0 554.666667 183.466667 0L512 930.133333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconset0435.defaultProps = {
  size: 18,
};

YpIconset0435 = React.memo ? React.memo(YpIconset0435) : YpIconset0435;

export default YpIconset0435;
