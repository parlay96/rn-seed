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

let YpIconDing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M938.7008 810.7008H85.2992v-85.4016h42.7008V428.032A384.7168 384.7168 0 0 1 512 42.7008C723.968 42.7008 896 215.04 896 428.032v297.2672h42.7008v85.4016z m-533.4016 42.5984h213.4016a106.7008 106.7008 0 0 1-213.4016 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconDing.defaultProps = {
  size: 18,
};

YpIconDing = React.memo ? React.memo(YpIconDing) : YpIconDing;

export default YpIconDing;
