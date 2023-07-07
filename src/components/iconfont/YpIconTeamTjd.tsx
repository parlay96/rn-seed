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

let YpIconTeamTjd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M473.258667 625.493333h-226.133334A75.946667 75.946667 0 0 1 170.666667 550.229333c0-8.362667 1.450667-16.554667 4.181333-24.405333l4.522667-13.056L538.453333 98.56a38.741333 38.741333 0 0 1 53.930667-4.266667c10.581333 8.874667 15.445333 22.698667 12.714667 36.096l-55.125334 269.397334h226.816a75.946667 75.946667 0 0 1 76.629334 75.093333 74.154667 74.154667 0 0 1-3.84 23.722667l-6.485334 19.114666-358.912 407.893334a38.741333 38.741333 0 0 1-53.930666 3.84 37.205333 37.205333 0 0 1-12.458667-35.84l55.552-268.032z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconTeamTjd.defaultProps = {
  size: 18,
};

YpIconTeamTjd = React.memo ? React.memo(YpIconTeamTjd) : YpIconTeamTjd;

export default YpIconTeamTjd;
