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

let YpIconToolbar121: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M161.322667 319.146667l256-170.666667a170.666667 170.666667 0 0 1 189.354666 0l256 170.666667A170.666667 170.666667 0 0 1 938.666667 461.056V768a170.666667 170.666667 0 0 1-170.666667 170.666667H256a170.666667 170.666667 0 0 1-170.666667-170.666667v-306.901333A170.666667 170.666667 0 0 1 161.322667 319.146667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M469.333333 512m42.666667 0l0 0q42.666667 0 42.666667 42.666667l0 170.666666q0 42.666667-42.666667 42.666667l0 0q-42.666667 0-42.666667-42.666667l0-170.666666q0-42.666667 42.666667-42.666667Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar121.defaultProps = {
  size: 18,
};

YpIconToolbar121 = React.memo ? React.memo(YpIconToolbar121) : YpIconToolbar121;

export default YpIconToolbar121;
