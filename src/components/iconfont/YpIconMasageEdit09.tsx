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

let YpIconMasageEdit09: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m128 0l768 0q128 0 128 128l0 768q0 128-128 128l-768 0q-128 0-128-128l0-768q0-128 128-128Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 168C322.016 168 168 322.016 168 512S322.016 856 512 856 856 701.984 856 512 701.984 168 512 168z m0 48a296 296 0 1 1 0 592 296 296 0 0 1 0-592z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M446.432 421.76l-104.544 12-3.296 0.608a24 24 0 0 0-10.208 40.928l77.536 71.168-20.896 103.168-0.448 3.296a24 24 0 0 0 35.776 22.368L512 623.488l91.648 51.808 3.008 1.44a24 24 0 0 0 32.32-27.104l-20.928-103.168 77.568-71.168 2.304-2.432a24 24 0 0 0-15.808-39.104l-104.576-12-43.712-95.712a24 24 0 0 0-43.648 0L446.4 421.76zM512 393.792l27.52 60.256 1.728 3.136c3.84 5.92 10.208 9.92 17.376 10.752l65.792 7.52-48.8 44.8-2.432 2.592a24 24 0 0 0-4.864 19.84l13.152 64.928-57.664-32.576-3.232-1.504a24 24 0 0 0-20.384 1.504l-57.696 32.576 13.184-64.896 0.448-3.552a24 24 0 0 0-7.744-18.88l-48.832-44.832 65.824-7.52a24 24 0 0 0 19.104-13.888l27.52-60.256z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

YpIconMasageEdit09.defaultProps = {
  size: 18,
};

YpIconMasageEdit09 = React.memo ? React.memo(YpIconMasageEdit09) : YpIconMasageEdit09;

export default YpIconMasageEdit09;
