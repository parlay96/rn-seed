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

let YpXiangji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1433 1024" width={size} height={size} {...rest}>
      <Path
        d="M875.52 148.48c30.72 0 56.32 20.48 61.44 51.2l10.24 56.32c5.12 30.72 30.72 51.2 61.44 51.2h163.84c15.36 0 30.72 5.12 40.96 20.48 10.24 10.24 15.36 25.6 15.36 40.96v445.44c0 15.36-5.12 30.72-15.36 46.08s-25.6 20.48-46.08 20.48H266.24c-15.36 0-30.72-10.24-46.08-20.48-10.24-15.36-15.36-30.72-15.36-46.08V368.64c0-15.36 5.12-30.72 15.36-46.08 10.24-10.24 30.72-15.36 46.08-15.36h163.84c30.72 0 56.32-25.6 61.44-51.2l10.24-56.32c10.24-30.72 35.84-51.2 66.56-51.2h307.2z m-25.6 276.48c-40.96-40.96-102.4-61.44-163.84-51.2-92.16 15.36-158.72 97.28-153.6 189.44 5.12 92.16 81.92 168.96 174.08 174.08 92.16 5.12 179.2-61.44 194.56-153.6 10.24-56.32-10.24-117.76-51.2-158.72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpXiangji.defaultProps = {
  size: 18,
};

YpXiangji = React.memo ? React.memo(YpXiangji) : YpXiangji;

export default YpXiangji;
