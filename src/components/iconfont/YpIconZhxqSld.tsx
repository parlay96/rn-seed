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

let YpIconZhxqSld: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M300.8 602.496l-90.432 90.56 120.64 120.64 482.688-482.752-120.64-120.576L602.432 300.8l60.416 60.352-60.416 60.416-60.288-60.416-60.352 60.416 60.352 60.288-60.352 60.352-60.352-60.352-60.352 60.352 60.352 60.352-60.352 60.352-60.288-60.48v0.064z m422.4-482.688L904.192 300.8c16.64 16.64 16.64 43.648 0 60.352l-543.04 543.04a42.688 42.688 0 0 1-60.352 0L119.808 723.2a42.688 42.688 0 0 1 0-60.352l543.04-543.04c16.64-16.64 43.712-16.64 60.352 0z m-120.768 663.68l60.416-60.352 95.616 95.744h60.352v-60.352l-95.68-95.68 60.352-60.352L896 714.944V896h-180.992l-112.512-112.512zM240.448 421.44L119.744 300.8a42.688 42.688 0 0 1 0-60.352L240.448 119.68c16.64-16.64 43.712-16.64 60.352 0l120.768 120.704-60.416 60.352-90.496-90.56-60.352 60.416L300.8 361.088l-60.352 60.352z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".65"
      />
    </Svg>
  );
};

YpIconZhxqSld.defaultProps = {
  size: 18,
};

YpIconZhxqSld = React.memo ? React.memo(YpIconZhxqSld) : YpIconZhxqSld;

export default YpIconZhxqSld;
