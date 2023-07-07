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

let YpIconPayfsWechat: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 128v768a128 128 0 0 0 128 128h768a128 128 0 0 0 128-128V128a128 128 0 0 0-128-128H128a128 128 0 0 0-128 128z m366.4 686.368c-28.64 19.04-76.768 50.368-95.68 59.072-27.712 12.8-19.712-14.816-19.712-14.816l16.416-94.592c-90.944-63.36-149.344-161.152-149.344-271.008C118.08 302.016 294.4 147.2 512 147.2c133.312 0 251.04 58.208 322.336 147.2L448 473.216s-31.488 11.904-59.072-4.928c-27.616-16.832-64.064-44.48-64.064-44.48s-42.4-36.096-19.648 29.664l59.136 138.304s6.976 41.216 54.08 14.848c36.928-20.608 323.232-193.28 446.368-267.584a310.4 310.4 0 0 1 41.184 153.952c0 191.04-176.384 345.856-393.92 345.856-51.456 0-100.576-8.736-145.6-24.512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconPayfsWechat.defaultProps = {
  size: 18,
};

YpIconPayfsWechat = React.memo ? React.memo(YpIconPayfsWechat) : YpIconPayfsWechat;

export default YpIconPayfsWechat;
