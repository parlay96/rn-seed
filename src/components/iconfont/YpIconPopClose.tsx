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

let YpIconPopClose: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 464.64l227.584-227.626667a33.536 33.536 0 1 1 47.36 47.402667L559.445333 512l227.584 227.584a33.536 33.536 0 1 1-47.402666 47.36L512 559.445333l-227.584 227.584a33.536 33.536 0 1 1-47.36-47.402666L464.554667 512 237.013333 284.416a33.536 33.536 0 1 1 47.402667-47.36L512 464.554667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconPopClose.defaultProps = {
  size: 18,
};

YpIconPopClose = React.memo ? React.memo(YpIconPopClose) : YpIconPopClose;

export default YpIconPopClose;
