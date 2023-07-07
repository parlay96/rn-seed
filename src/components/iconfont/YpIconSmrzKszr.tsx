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

let YpIconSmrzKszr: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M717.7216 102.4L921.6 310.1184V870.4a51.2 51.2 0 0 1-51.2 51.2H204.8a51.2 51.2 0 0 1-51.2-51.2V153.6a51.2 51.2 0 0 1 51.2-51.2h512.9216zM665.6 179.2H230.4v665.6h614.4V358.4H716.8a51.2 51.2 0 0 1-51.2-51.2V179.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M537.6 320a115.2 115.2 0 0 1 59.2384 214.016c61.952 19.7632 107.1616 70.0416 107.1616 131.584a38.4 38.4 0 0 1-76.4416 5.2224L627.2 665.6c0-33.2288-38.4512-64-89.6-64-48.2816 0-85.2992 27.4432-89.2416 58.4704L448 665.6a38.4 38.4 0 1 1-76.8 0c0-61.5424 45.1584-111.8208 107.1616-131.6352A115.2 115.2 0 0 1 537.6 320z m0 76.8a38.4 38.4 0 1 0 0 76.8 38.4 38.4 0 0 0 0-76.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconSmrzKszr.defaultProps = {
  size: 18,
};

YpIconSmrzKszr = React.memo ? React.memo(YpIconSmrzKszr) : YpIconSmrzKszr;

export default YpIconSmrzKszr;
