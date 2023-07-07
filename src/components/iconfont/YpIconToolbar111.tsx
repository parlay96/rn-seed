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

let YpIconToolbar111: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M417.322667 131.2l-256 170.666667A170.666667 170.666667 0 0 0 85.333333 443.904V768a170.666667 170.666667 0 0 0 170.666667 170.666667h512a170.666667 170.666667 0 0 0 170.666667-170.666667v-324.096a170.666667 170.666667 0 0 0-75.989334-142.037333l-256-170.666667a170.666667 170.666667 0 0 0-189.354666 0zM559.36 202.24l256 170.666667A85.333333 85.333333 0 0 1 853.333333 443.904V768a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-324.096a85.333333 85.333333 0 0 1 37.973333-70.997333l256-170.666667a85.333333 85.333333 0 0 1 94.72 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M469.333333 512m42.666667 0l0 0q42.666667 0 42.666667 42.666667l0 170.666666q0 42.666667-42.666667 42.666667l0 0q-42.666667 0-42.666667-42.666667l0-170.666666q0-42.666667 42.666667-42.666667Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconToolbar111.defaultProps = {
  size: 18,
};

YpIconToolbar111 = React.memo ? React.memo(YpIconToolbar111) : YpIconToolbar111;

export default YpIconToolbar111;
