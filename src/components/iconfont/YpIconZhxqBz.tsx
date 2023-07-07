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

let YpIconZhxqBz: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 469.312a213.312 213.312 0 0 1 213.312 213.376v256H640v-256A128 128 0 0 0 519.488 554.88L512 554.688a128 128 0 0 0-127.808 120.448L384 682.688v256H298.688v-256A213.312 213.312 0 0 1 512 469.312z m-277.312 128c11.904 0 23.424 1.408 34.56 4.032-7.296 21.76-11.648 44.352-12.864 67.2l-0.384 14.08v3.712a63.68 63.68 0 0 0-15.168-3.392l-6.144-0.256a64 64 0 0 0-63.744 57.856l-0.256 6.144v192H85.312v-192a149.312 149.312 0 0 1 149.376-149.376z m554.624 0a149.312 149.312 0 0 1 149.376 149.376v192h-85.376v-192a64 64 0 0 0-57.856-63.744l-6.144-0.256c-7.424 0-14.592 1.28-21.312 3.584v-3.584c0-28.416-4.608-55.744-13.184-81.28a145.92 145.92 0 0 1 34.56-4.096z m-554.624-256a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m554.624 0a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376zM234.688 426.688a21.312 21.312 0 1 0 0 42.624 21.312 21.312 0 0 0 0-42.624z m554.624 0a21.312 21.312 0 1 0 0 42.624 21.312 21.312 0 0 0 0-42.624zM512 85.312a170.688 170.688 0 1 1 0 341.376 170.688 170.688 0 0 1 0-341.376z m0 85.376a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".65"
      />
    </Svg>
  );
};

YpIconZhxqBz.defaultProps = {
  size: 18,
};

YpIconZhxqBz = React.memo ? React.memo(YpIconZhxqBz) : YpIconZhxqBz;

export default YpIconZhxqBz;
