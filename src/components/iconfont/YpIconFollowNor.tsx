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

let YpIconFollowNor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M907.9808 162.3552a264.6016 264.6016 0 0 1 6.5024 360.3456l-7.68 8.192-398.1312 407.7568-392.192-406.6304a266.24 266.24 0 0 1 0-369.664 247.6544 247.6544 0 0 1 350.208-6.3488l6.2976 6.3488 37.888 39.2704 42.0864-43.008 2.6624-2.6112a249.1904 249.1904 0 0 1 352.3584 6.3488z m-61.44 59.2384a163.7888 163.7888 0 0 0-224.4096-10.8544l-6.8096 6.2464-3.9936 3.8912-100.864 103.2704-98.8672-102.5536a162.304 162.304 0 0 0-233.6768 0 180.9408 180.9408 0 0 0-6.5536 244.0704l6.5536 7.168 331.1104 343.2448 335.5136-343.5008 6.4512-6.8608a179.3024 179.3024 0 0 0-4.4544-244.1216z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".85"
      />
    </Svg>
  );
};

YpIconFollowNor.defaultProps = {
  size: 18,
};

YpIconFollowNor = React.memo ? React.memo(YpIconFollowNor) : YpIconFollowNor;

export default YpIconFollowNor;
