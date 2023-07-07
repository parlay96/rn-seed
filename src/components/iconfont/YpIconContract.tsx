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

let YpIconContract: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.3504 85.3504c23.552 0 42.6496 19.0976 42.6496 42.6496v160.256l-85.3504 85.4016V170.6496H213.3504v682.7008h597.2992v-117.7088l85.3504-85.2992V896c0 23.552-19.0976 42.6496-42.6496 42.6496H170.6496A42.7008 42.7008 0 0 1 128 896v-768c0-23.552 19.0976-42.6496 42.6496-42.6496h682.7008z m75.8272 290.4576l60.3648 60.3136L657.664 768l-60.416-0.1024 0.1024-60.2112 331.8272-331.8784zM554.6496 512v85.3504H341.3504V512h213.2992z m128-170.6496v85.2992H341.3504V341.3504h341.2992z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconContract.defaultProps = {
  size: 18,
};

YpIconContract = React.memo ? React.memo(YpIconContract) : YpIconContract;

export default YpIconContract;
