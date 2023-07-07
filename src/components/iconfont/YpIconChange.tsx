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

let YpIconChange: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M767.914667 554.666667c36.352 0 55.338667 42.069333 33.408 69.248l-3.242667 3.584-170.666667 170.666666a42.666667 42.666667 0 0 1-63.872-56.32l3.541334-4.010666L664.917333 640H255.914667a42.666667 42.666667 0 0 1-42.368-37.674667L213.248 597.333333a42.666667 42.666667 0 0 1 37.674667-42.368L255.914667 554.666667h512z m-311.04-328.832a42.666667 42.666667 0 0 1 3.498666 56.32l-3.541333 4.010666L358.997333 384H768a42.666667 42.666667 0 0 1 42.368 37.674667L810.666667 426.666667a42.666667 42.666667 0 0 1-37.674667 42.368L768 469.333333H256c-36.352 0-55.338667-42.069333-33.408-69.248l3.242667-3.584 170.666666-170.666666a42.666667 42.666667 0 0 1 60.330667 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconChange.defaultProps = {
  size: 18,
};

YpIconChange = React.memo ? React.memo(YpIconChange) : YpIconChange;

export default YpIconChange;
