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

let YpImgNameSj: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M772.096 551.3216L288.768 954.0608A51.2 51.2 0 0 1 204.8 914.6368V109.3632A51.2 51.2 0 0 1 288.768 69.9392l483.328 402.7392a51.2 51.2 0 0 1 6.4512 72.0896l-6.5536 6.5536z"
        fill={getIconColor(color, 0, '#262626')}
      />
    </Svg>
  );
};

YpImgNameSj.defaultProps = {
  size: 18,
};

YpImgNameSj = React.memo ? React.memo(YpImgNameSj) : YpImgNameSj;

export default YpImgNameSj;
