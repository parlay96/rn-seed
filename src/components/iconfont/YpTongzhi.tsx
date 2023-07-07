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

let YpTongzhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1486 1024" width={size} height={size} {...rest}>
      <Path
        d="M667.125191 196.608c135.168 0 245.76 110.592 245.76 245.76v299.008l20.48 24.576L978.421191 815.104h-626.688l45.056-49.152 20.48-24.576V442.368c4.096-135.168 114.688-245.76 249.856-245.76m0-81.92c-180.224 0-327.68 147.456-327.68 327.68v266.24l-65.536 69.632c-40.96 45.056-8.192 118.784 49.152 118.784H1007.093191c61.44 0 94.208-73.728 49.152-118.784L994.805191 712.704V442.368c0-180.224-147.456-327.68-327.68-327.68z m81.92 827.392h-163.84c-20.48 0-40.96 16.384-40.96 40.96 0 20.48 16.384 40.96 40.96 40.96h163.84c20.48 0 40.96-16.384 40.96-40.96 0-20.48-16.384-40.96-40.96-40.96z m-53.248-942.08h-57.344c-16.384 0-28.672 8.192-36.864 20.48-8.192 12.288-8.192 28.672 0 40.96 8.192 12.288 20.48 20.48 36.864 20.48h57.344c16.384 0 28.672-8.192 36.864-20.48 8.192-12.288 8.192-28.672 0-40.96-8.192-12.288-20.48-20.48-36.864-20.48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpTongzhi.defaultProps = {
  size: 18,
};

YpTongzhi = React.memo ? React.memo(YpTongzhi) : YpTongzhi;

export default YpTongzhi;
