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

let YpIconset0436: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M825.6 347.733333l-298.666667-298.666667C522.666667 44.8 518.4 42.666667 512 42.666667c-6.4 0-10.666667 2.133333-14.933333 6.4l-298.666667 298.666667C194.133333 352 192 356.266667 192 362.666667c0 12.8 8.533333 21.333333 21.333333 21.333333l192 0 0 512c0 46.933333 38.4 85.333333 85.333333 85.333333l42.666667 0c46.933333 0 85.333333-38.4 85.333333-85.333333L618.666667 384l192 0c12.8 0 21.333333-8.533333 21.333333-21.333333C832 356.266667 829.866667 352 825.6 347.733333zM576 341.333333l0 554.666667c0 23.466667-19.2 42.666667-42.666667 42.666667l-42.666667 0c-23.466667 0-42.666667-19.2-42.666667-42.666667L448 341.333333l-183.466667 0L512 93.866667 759.466667 341.333333 576 341.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconset0436.defaultProps = {
  size: 18,
};

YpIconset0436 = React.memo ? React.memo(YpIconset0436) : YpIconset0436;

export default YpIconset0436;
