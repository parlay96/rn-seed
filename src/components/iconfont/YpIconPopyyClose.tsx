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

let YpIconPopyyClose: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m0 28.444444C244.394667 28.444444 28.444444 244.394667 28.444444 512c0 267.605333 215.950222 483.555556 483.555556 483.555556 267.605333 0 483.555556-215.950222 483.555556-483.555556 0-267.605333-215.950222-483.555556-483.555556-483.555556z m-162.332444 321.223112a28.444444 28.444444 0 0 1 37.546666-2.360889l2.673778 2.360889L512 471.751111l122.112-122.083555a28.444444 28.444444 0 0 1 42.581333 37.546666l-2.360889 2.673778L552.248889 512l122.083555 122.112 2.360889 2.673778a28.444444 28.444444 0 0 1-39.907555 39.907555l-2.673778-2.360889L512 552.248889l-122.112 122.083555a28.444444 28.444444 0 0 1-42.581333-37.546666l2.360889-2.673778L471.751111 512l-122.083555-122.112-2.360889-2.673778a28.444444 28.444444 0 0 1 2.360889-37.546666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconPopyyClose.defaultProps = {
  size: 18,
};

YpIconPopyyClose = React.memo ? React.memo(YpIconPopyyClose) : YpIconPopyyClose;

export default YpIconPopyyClose;
