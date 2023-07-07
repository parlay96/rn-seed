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

let YpIconYuyinWhite: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M437.76 1024a61.952 61.952 0 0 0 44.397714-18.651429 64 64 0 0 0 0-89.526857 577.536 577.536 0 0 1 0-807.643428 64 64 0 0 0 0-89.6 62.025143 62.025143 0 0 0-88.502857 0 698.733714 698.733714 0 0 0-201.581714 493.494857 698.733714 698.733714 0 0 0 201.728 493.568c11.629714 11.702857 27.428571 18.285714 43.885714 18.358857zM570.514286 800.036571a61.878857 61.878857 0 0 0 44.397714-18.651428 64 64 0 0 0 0-89.526857 256.731429 256.731429 0 0 1 0-358.912 64 64 0 0 0 0-89.6 62.171429 62.171429 0 0 0-88.649143 0c-146.285714 149.577143-146.285714 388.681143 0 538.331428a62.171429 62.171429 0 0 0 44.251429 18.358857z m162.084571-190.902857a95.963429 95.963429 0 0 0 0-191.926857 100.644571 100.644571 0 0 0-70.363428 28.233143 93.769143 93.769143 0 0 0-28.964572 67.949714c1.097143 53.833143 45.494857 96.548571 99.328 95.817143z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

YpIconYuyinWhite.defaultProps = {
  size: 18,
};

YpIconYuyinWhite = React.memo ? React.memo(YpIconYuyinWhite) : YpIconYuyinWhite;

export default YpIconYuyinWhite;
