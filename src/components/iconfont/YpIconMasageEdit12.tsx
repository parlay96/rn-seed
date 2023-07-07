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

let YpIconMasageEdit12: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m128 0l768 0q128 0 128 128l0 768q0 128-128 128l-768 0q-128 0-128-128l0-768q0-128 128-128Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M183.616 427.712l-3.2 1.44c-19.2 10.24-15.584 40.256 7.04 44.608l304.96 59.008 76.384 305.056c5.824 23.2 38.24 24.576 45.984 1.92l207.936-608a24 24 0 0 0-31.104-30.24l-608 226.24z m577.28-163.584l-165.248 483.232-60.352-241.056-1.088-3.296a24 24 0 0 0-17.664-14.432L280.512 442.88l480.384-178.752z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M585.664 404.64a24 24 0 0 1 36.256 31.264l-2.304 2.688-90.528 90.496a24 24 0 0 1-36.256-31.232l2.336-2.688 90.496-90.528z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpIconMasageEdit12.defaultProps = {
  size: 18,
};

YpIconMasageEdit12 = React.memo ? React.memo(YpIconMasageEdit12) : YpIconMasageEdit12;

export default YpIconMasageEdit12;
