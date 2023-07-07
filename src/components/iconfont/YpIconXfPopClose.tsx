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

let YpIconXfPopClose: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-341.333333 0a341.333333 341.333333 0 1 0 682.666666 0 341.333333 341.333333 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M417.450667 387.797333l2.986666 2.432L512 481.834667l91.562667-91.605334 2.986666-2.432a21.333333 21.333333 0 0 1 29.653334 29.653334l-2.432 2.986666L542.165333 512l91.605334 91.562667a21.333333 21.333333 0 0 1-27.221334 32.64l-2.986666-2.432L512 542.165333l-91.562667 91.605334-2.986666 2.432a21.333333 21.333333 0 0 1-29.653334-29.653334l2.432-2.986666L481.834667 512 390.229333 420.437333a21.333333 21.333333 0 0 1 27.221334-32.64z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconXfPopClose.defaultProps = {
  size: 18,
};

YpIconXfPopClose = React.memo ? React.memo(YpIconXfPopClose) : YpIconXfPopClose;

export default YpIconXfPopClose;
