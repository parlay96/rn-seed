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

let YpIcTabJia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M828.02 196.518C743.477 112.384 631.108 66.05 511.546 66.05c-119.558 0-231.954 46.333-316.5 130.467-84.578 84.162-131.17 196.112-131.17 315.195 0 119.112 46.592 231.028 131.135 315.189 84.548 84.133 196.946 130.467 316.507 130.467 119.56 0 231.96-46.334 316.474-130.467 84.611-84.19 131.198-196.14 131.169-315.222 0.03-119.086-46.529-231-131.141-315.162z m-92.63 347.167H543.525v191.863c0 17.683-14.326 31.975-31.98 31.975-17.646 0-31.973-14.292-31.973-31.975V543.685H287.711c-17.648 0-31.972-14.324-31.972-31.972 0-17.653 14.324-31.98 31.972-31.98h191.863v-191.86c0-17.649 14.326-31.975 31.973-31.975 17.654 0 31.98 14.326 31.98 31.974v191.861h191.862c17.682 0 31.973 14.327 31.973 31.98 0 17.648-14.291 31.972-31.973 31.972z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIcTabJia.defaultProps = {
  size: 18,
};

YpIcTabJia = React.memo ? React.memo(YpIcTabJia) : YpIcTabJia;

export default YpIcTabJia;
