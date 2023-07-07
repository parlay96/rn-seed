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

let YpIconZhxqSgd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M469.312 810.688V384H170.688v426.688h298.624z m0-512v-128C469.312 147.072 488.448 128 512 128h384c23.552 0 42.688 19.072 42.688 42.688v682.624A42.688 42.688 0 0 1 896 896H128a42.688 42.688 0 0 1-42.688-42.688v-512c0-23.552 19.136-42.624 42.688-42.624h341.312z m85.376-85.376v597.376h298.624V213.312H554.688z m-341.376 469.376h213.376V768H213.312v-85.312z m384 0h213.376V768H597.312v-85.312z m0-128h213.376V640H597.312V554.688z m0-128h213.376V512H597.312V426.688z m-384 128h213.376V640H213.312V554.688z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".65"
      />
    </Svg>
  );
};

YpIconZhxqSgd.defaultProps = {
  size: 18,
};

YpIconZhxqSgd = React.memo ? React.memo(YpIconZhxqSgd) : YpIconZhxqSgd;

export default YpIconZhxqSgd;
