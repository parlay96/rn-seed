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

let YpIconZhxqCdq: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.312A426.688 426.688 0 1 1 85.312 512h85.376a341.376 341.376 0 1 0 59.072-192h111.552v85.312h-256v-256h85.376V256A425.856 425.856 0 0 1 512 85.312z m42.688 213.376v195.584l138.368 138.368-60.416 60.416-163.328-163.456V298.688h85.376z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".65"
      />
    </Svg>
  );
};

YpIconZhxqCdq.defaultProps = {
  size: 18,
};

YpIconZhxqCdq = React.memo ? React.memo(YpIconZhxqCdq) : YpIconZhxqCdq;

export default YpIconZhxqCdq;
