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

let YpIconSearch: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 192A288.085333 288.085333 0 0 1 768 480 288.085333 288.085333 0 0 1 480 768a288.085333 288.085333 0 0 1-288-288 288.085333 288.085333 0 0 1 288-288z m0 512c123.733333 0 224-100.266667 224-224C704 356.224 603.733333 256 480 256A223.914667 223.914667 0 0 0 256 480c0 123.733333 100.224 224 224 224z m271.530667 2.261333l90.496 90.496-45.226667 45.269334-90.538667-90.496 45.226667-45.226667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconSearch.defaultProps = {
  size: 18,
};

YpIconSearch = React.memo ? React.memo(YpIconSearch) : YpIconSearch;

export default YpIconSearch;
