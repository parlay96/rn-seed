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

let YpHuchudanchuangguanbianniubeifen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 430.811429L902.144 40.521143a57.490286 57.490286 0 1 1 81.188571 81.261714L593.334857 512l390.144 390.144a57.490286 57.490286 0 1 1-81.261714 81.188571L512 593.334857l-390.144 390.144a57.490286 57.490286 0 1 1-81.188571-81.261714L430.665143 512 40.594286 121.856A57.490286 57.490286 0 1 1 121.856 40.667429L512 430.665143z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpHuchudanchuangguanbianniubeifen.defaultProps = {
  size: 18,
};

YpHuchudanchuangguanbianniubeifen = React.memo ? React.memo(YpHuchudanchuangguanbianniubeifen) : YpHuchudanchuangguanbianniubeifen;

export default YpHuchudanchuangguanbianniubeifen;
