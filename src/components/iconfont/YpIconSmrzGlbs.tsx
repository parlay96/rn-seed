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

let YpIconSmrzGlbs: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.2 102.4a51.2 51.2 0 0 1 51.2 51.2v690.3296a51.2 51.2 0 0 1-71.3728 47.104L512 768l-287.0272 123.0336A51.2 51.2 0 0 1 153.6 843.9296V153.6a51.2 51.2 0 0 1 51.2-51.2h614.4z m-25.6 76.8h-563.2v625.8688l281.6-120.6272 281.6 120.6784V179.2z m-266.752 122.5216c6.656 3.2768 11.9808 8.6528 15.2576 15.2576l18.176 36.864a51.2 51.2 0 0 0 38.5536 28.0064l40.6528 5.888a33.536 33.536 0 0 1 18.5856 57.2416l-29.3888 28.672a51.2 51.2 0 0 0-14.7456 45.312l6.9632 40.4992a33.536 33.536 0 0 1-48.6912 35.3792l-36.352-19.0976a51.2 51.2 0 0 0-47.6672 0l-36.352 19.0976a33.536 33.536 0 0 1-48.7424-35.328l6.9632-40.5504a51.2 51.2 0 0 0-14.7456-45.312l-29.3888-28.672a33.536 33.536 0 0 1 18.5856-57.2416l40.6528-5.888a51.2 51.2 0 0 0 38.5536-28.0064l18.176-36.864a33.536 33.536 0 0 1 44.9536-15.2576z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".85"
      />
    </Svg>
  );
};

YpIconSmrzGlbs.defaultProps = {
  size: 18,
};

YpIconSmrzGlbs = React.memo ? React.memo(YpIconSmrzGlbs) : YpIconSmrzGlbs;

export default YpIconSmrzGlbs;
