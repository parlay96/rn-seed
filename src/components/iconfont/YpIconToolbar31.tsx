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

let YpIconToolbar31: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 85.333333a128 128 0 0 1 127.786667 120.490667L896 213.333333v597.333334a128 128 0 0 1-120.490667 127.786666L768 938.666667H256a128 128 0 0 1-127.786667-120.490667L128 810.666667V213.333333a128 128 0 0 1 120.490667-127.786666L256 85.333333h512zM256 170.666667a42.666667 42.666667 0 0 0-42.368 37.674666L213.333333 213.333333v597.333334a42.666667 42.666667 0 0 0 37.674667 42.368L256 853.333333V170.666667z m512 0H341.333333v682.666666h426.666667a42.666667 42.666667 0 0 0 42.368-37.674666L810.666667 810.666667V213.333333a42.666667 42.666667 0 0 0-42.666667-42.666666z m-128 426.666666a42.666667 42.666667 0 0 1 0 85.333334h-170.666667a42.666667 42.666667 0 0 1 0-85.333334h170.666667z m0-170.666666a42.666667 42.666667 0 0 1 0 85.333333h-170.666667a42.666667 42.666667 0 0 1 0-85.333333h170.666667z m0-170.666667a42.666667 42.666667 0 0 1 0 85.333333h-170.666667a42.666667 42.666667 0 0 1 0-85.333333h170.666667z"
        fill={getIconColor(color, 0, '#62666B')}
      />
    </Svg>
  );
};

YpIconToolbar31.defaultProps = {
  size: 18,
};

YpIconToolbar31 = React.memo ? React.memo(YpIconToolbar31) : YpIconToolbar31;

export default YpIconToolbar31;
