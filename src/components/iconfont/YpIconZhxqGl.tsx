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

let YpIconZhxqGl: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.312 170.688H896c23.552 0 42.688 19.072 42.688 42.624V896a42.688 42.688 0 0 1-42.688 42.688H128A42.688 42.688 0 0 1 85.312 896V213.312c0-23.552 19.136-42.624 42.688-42.624h170.688V85.312H384v85.376h256V85.312h85.312v85.376zM640 256H384v85.312H298.688V256h-128v170.688h682.624V256h-128v85.312H640V256z m213.312 256H170.688v341.312h682.624V512zM256 640h85.312v85.312H256V640z m170.688 0H768v85.312H426.688V640z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".65"
      />
    </Svg>
  );
};

YpIconZhxqGl.defaultProps = {
  size: 18,
};

YpIconZhxqGl = React.memo ? React.memo(YpIconZhxqGl) : YpIconZhxqGl;

export default YpIconZhxqGl;
