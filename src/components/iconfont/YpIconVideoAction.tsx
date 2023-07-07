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

let YpIconVideoAction: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M386.56 166.912l436.309333 272.725333a85.333333 85.333333 0 0 1 0 144.725334L386.56 857.088A85.333333 85.333333 0 0 1 256 784.725333V239.274667a85.333333 85.333333 0 0 1 130.56-72.362667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconVideoAction.defaultProps = {
  size: 18,
};

YpIconVideoAction = React.memo ? React.memo(YpIconVideoAction) : YpIconVideoAction;

export default YpIconVideoAction;
