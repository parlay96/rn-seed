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

let YpZhaogongrenxuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M838.4 25.1H336.9C184.1 25.1 60.2 149 60.2 301.8v625.6c0 50.9 41.3 92.2 92.2 92.2h472.7c-78.8-60.1-129.8-154.9-129.8-261.7 0-181.6 147.2-328.8 328.8-328.8 37.2 0 73 6.2 106.4 17.6V117.3c0.1-50.9-41.2-92.2-92.1-92.2zM381 488.4c0 18.8-15.2 34-34 34H231.8c-18.8 0-34-15.2-34-34s15.2-34 34-34H347c18.8 0 34 15.2 34 34z m175.2-208.7c0 18.8-15.2 34-34 34H231.8c-18.8 0-34-15.2-34-34s15.2-34 34-34h290.4c18.8 0 34 15.2 34 34z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M776.7 930.4c-107.1 0-194.3-87.2-194.3-194.3s87.2-194.3 194.3-194.3S971 629 971 736.1s-87.2 194.3-194.3 194.3z m0-308.6c-63 0-114.3 51.3-114.3 114.3s51.3 114.3 114.3 114.3S891 799.1 891 736.1s-51.3-114.3-114.3-114.3z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M992.4 965c-18.2 18.2-47.6 18.2-65.8 0l-57-57c-18.2-18.2-18.2-47.6 0-65.8 18.2-18.2 47.6-18.2 65.8 0l57 57c18.1 18.1 18.1 47.6 0 65.8z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M506.7 325.4H247.3c-27.4 0-49.5-22.2-49.5-49.5v-1c0-27.4 22.2-49.5 49.5-49.5h259.4c27.4 0 49.5 22.2 49.5 49.5v1c0 27.3-22.2 49.5-49.5 49.5zM339 537.5H235.5c-27.6 0-50-22.4-50-50s22.4-50 50-50H339c27.6 0 50 22.4 50 50s-22.4 50-50 50z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

YpZhaogongrenxuanzhong.defaultProps = {
  size: 18,
};

YpZhaogongrenxuanzhong = React.memo ? React.memo(YpZhaogongrenxuanzhong) : YpZhaogongrenxuanzhong;

export default YpZhaogongrenxuanzhong;
