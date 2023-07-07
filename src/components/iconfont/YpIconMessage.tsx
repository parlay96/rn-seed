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

let YpIconMessage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 853.333333H128a42.666667 42.666667 0 0 1 0-85.333333v-297.344C128 257.834667 299.946667 85.333333 512 85.333333s384 172.501333 384 385.322667V768a42.666667 42.666667 0 0 1 0 85.333333zM213.333333 768h597.333334v-297.344C810.666667 304.981333 676.949333 170.666667 512 170.666667s-298.666667 134.314667-298.666667 299.989333V768z m405.333334 128a106.666667 106.666667 0 1 1-213.333334 0h213.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconMessage.defaultProps = {
  size: 18,
};

YpIconMessage = React.memo ? React.memo(YpIconMessage) : YpIconMessage;

export default YpIconMessage;
