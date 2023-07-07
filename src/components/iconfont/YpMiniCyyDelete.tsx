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

let YpMiniCyyDelete: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M571.904 508.416l376.832-376.832a41.088 41.088 0 0 0 0-57.856 41.088 41.088 0 0 0-57.856 0L514.048 450.56 137.216 73.728a41.088 41.088 0 0 0-57.856 0 41.088 41.088 0 0 0 0 57.856l376.832 376.832-376.832 376.832a41.088 41.088 0 0 0 0 57.856 40.192 40.192 0 0 0 29.184 11.776c10.24 0 20.992-4.096 29.184-11.776L514.56 566.272l376.832 376.832a40.192 40.192 0 0 0 29.184 11.776 42.368 42.368 0 0 0 29.184-11.776 41.088 41.088 0 0 0 0-57.856L571.904 508.416z"
        fill={getIconColor(color, 0, '#F74742')}
      />
    </Svg>
  );
};

YpMiniCyyDelete.defaultProps = {
  size: 18,
};

YpMiniCyyDelete = React.memo ? React.memo(YpMiniCyyDelete) : YpMiniCyyDelete;

export default YpMiniCyyDelete;
