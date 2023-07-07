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

let YpImageUserhead48Pxbeifen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 0h768a128 128 0 0 1 128 128v768a128 128 0 0 1-128 128H128a128 128 0 0 1-128-128V128a128 128 0 0 1 128-128z"
        fill={getIconColor(color, 0, '#BAD5F8')}
      />
      <Path
        d="M323.968 763.52c54.997333-7.68 117.674667-11.52 188.032-11.52s133.034667 3.84 188.032 11.52a149.333333 149.333333 0 0 1 123.690667 109.418667L864 1024h-704l40.277333-151.061333a149.333333 149.333333 0 0 1 123.690667-109.44z"
        fill={getIconColor(color, 1, '#0E4083')}
      />
      <Path
        d="M576 752.938667a2051.093333 2051.093333 0 0 0-64-1.450667c-14.293333 0-35.626667 0.490667-64 1.450667v102.762666a170.666667 170.666667 0 0 0 18.026667 76.330667L512 1024l45.973333-91.946667A170.666667 170.666667 0 0 0 576 855.68v-102.762667z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <Path
        d="M496 768l-16 256h64l-16-256-16-16z"
        fill={getIconColor(color, 3, '#0E4083')}
      />
      <Path
        d="M272 392V288L320 192l80-48L512 128l112 16L704 192l48 96v104z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
      <Path
        d="M416 258.666667l-16-114.666667L512 128l112 16-16 114.666667z"
        fill={getIconColor(color, 5, '#BAD5F8')}
      />
      <Path
        d="M304 400h416v128c0 114.88-93.12 208-208 208s-208-93.12-208-208v-128z"
        fill={getIconColor(color, 6, '#FFE0CF')}
      />
      <Path
        d="M448 608h128c0 35.093333-28.906667 64-64 64s-64-28.906667-64-64z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
      <Path
        d="M304 448h32v96h-32a48 48 0 1 1 0-96zM720 448h-32v96h32a48 48 0 1 0 0-96z"
        fill={getIconColor(color, 8, '#FFE0CF')}
      />
      <Path
        d="M272 384l-16 16v32l144 32h256l112-32v-32l-16-16z"
        fill={getIconColor(color, 9, '#F1F7FF')}
      />
      <Path
        d="M416 118.144L448 96h136L608 118.144V384h-192z"
        fill={getIconColor(color, 10, '#FFFFFF')}
      />
      <Path
        d="M512 304m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill={getIconColor(color, 11, '#0079F5')}
      />
    </Svg>
  );
};

YpImageUserhead48Pxbeifen.defaultProps = {
  size: 18,
};

YpImageUserhead48Pxbeifen = React.memo ? React.memo(YpImageUserhead48Pxbeifen) : YpImageUserhead48Pxbeifen;

export default YpImageUserhead48Pxbeifen;
