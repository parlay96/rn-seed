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

let YpIconEditGrzl: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M273.664 682.666667l432.725333-432.725334-60.330666-60.330666L213.333333 622.336V682.666667h60.330667z m35.413333 85.333333H128V586.922667l487.936-487.850667a42.666667 42.666667 0 0 1 60.330667 0l120.661333 120.661333a42.666667 42.666667 0 0 1 0 60.416L308.992 768zM128 853.333333h768v85.333334h-768v-85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconEditGrzl.defaultProps = {
  size: 18,
};

YpIconEditGrzl = React.memo ? React.memo(YpIconEditGrzl) : YpIconEditGrzl;

export default YpIconEditGrzl;
