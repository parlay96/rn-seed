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

let YpPhone: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M378.71616 645.28384c85.38112 85.38112 162.44736 99.04128 187.51488 73.97376 41.79968-41.79968 109.91616-41.472 152.1664 0.75776l60.39552 60.416c26.37824 26.37824 26.60352 68.95616 0.47104 95.08864l-55.95136 55.95136c-20.6848 20.6848-49.19296 31.3344-78.4384 31.08864-98.2016-0.8192-230.87104-92.75392-360.77568-222.65856S62.2592 477.32736 61.44 379.10528c-0.24576-29.22496 10.40384-57.73312 31.08864-78.4384L148.48 244.736c26.13248-26.13248 68.7104-25.9072 95.08864 0.47104l60.416 60.416c42.22976 42.22976 42.55744 110.34624 0.75776 152.14592-25.06752 25.06752-11.40736 102.13376 73.97376 187.51488zM962.56 552.96a40.96 40.96 0 1 1-81.92 0c0-226.22208-183.37792-409.6-409.6-409.6a40.96 40.96 0 1 1 0-81.92c271.4624 0 491.52 220.0576 491.52 491.52z m-184.32 0a40.96 40.96 0 1 1-81.92 0c0-124.416-100.864-225.28-225.28-225.28a40.96 40.96 0 1 1 0-81.92c169.65632 0 307.2 137.54368 307.2 307.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpPhone.defaultProps = {
  size: 18,
};

YpPhone = React.memo ? React.memo(YpPhone) : YpPhone;

export default YpPhone;
