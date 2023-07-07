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

let YpIconHyzxtsPssp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M85.333333 170.368A42.666667 42.666667 0 0 1 127.658667 128h768.682666c23.381333 0 42.325333 18.986667 42.325334 42.368v683.264a42.666667 42.666667 0 0 1-42.325334 42.368H127.658667A42.368 42.368 0 0 1 85.333333 853.632V170.368z m367.872 188.672a17.066667 17.066667 0 0 0-26.538666 14.165333v277.589334a17.066667 17.066667 0 0 0 26.538666 14.165333l208.170667-138.752a17.066667 17.066667 0 0 0 0-28.416l-208.213333-138.752h0.042666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconHyzxtsPssp.defaultProps = {
  size: 18,
};

YpIconHyzxtsPssp = React.memo ? React.memo(YpIconHyzxtsPssp) : YpIconHyzxtsPssp;

export default YpIconHyzxtsPssp;
