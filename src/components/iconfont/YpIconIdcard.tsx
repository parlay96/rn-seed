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

let YpIconIdcard: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M85.333333 170.368A42.666667 42.666667 0 0 1 127.658667 128h768.682666c23.381333 0 42.325333 18.986667 42.325334 42.368v683.264a42.666667 42.666667 0 0 1-42.325334 42.368H127.658667A42.368 42.368 0 0 1 85.333333 853.632V170.368zM256 640v85.333333h512v-85.333333H256z m0-341.333333v256h256V298.666667H256z m341.333333 0v85.333333h170.666667V298.666667h-170.666667z m0 170.666666v85.333334h170.666667v-85.333334h-170.666667zM341.333333 384h85.333334v85.333333H341.333333V384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconIdcard.defaultProps = {
  size: 18,
};

YpIconIdcard = React.memo ? React.memo(YpIconIdcard) : YpIconIdcard;

export default YpIconIdcard;
