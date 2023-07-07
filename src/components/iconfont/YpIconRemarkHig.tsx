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

let YpIconRemarkHig: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.6496 85.3504c47.104 0 85.3504 38.1952 85.3504 85.2992v694.528a42.6496 42.6496 0 0 1-63.8464 37.0176l-299.008-170.8032a42.6496 42.6496 0 0 0-42.2912 0l-299.008 170.8032a42.6496 42.6496 0 0 1-63.8464-37.0176V170.6496c0-47.104 38.1952-85.2992 85.3504-85.2992h597.2992z m0 68.2496H213.3504a17.0496 17.0496 0 0 0-16.7424 13.6192l-0.3584 3.4304v650.3936l260.7104-148.8896a110.9504 110.9504 0 0 1 102.656-3.8912l7.424 3.8912 260.7104 148.9408V170.6496a17.0496 17.0496 0 0 0-13.6192-16.6912L810.6496 153.6z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".85"
      />
      <Path
        d="M500.0704 518.2464l-42.496 22.3744a25.6 25.6 0 0 1-37.12-26.9824l8.0896-47.36a25.6 25.6 0 0 0-7.3216-22.6304l-34.4064-33.536a25.6 25.6 0 0 1 14.1824-43.6224l47.5136-6.912a25.6 25.6 0 0 0 19.3024-14.0288l21.248-43.008a25.6 25.6 0 0 1 45.8752 0l21.248 43.008a25.6 25.6 0 0 0 19.3024 14.0288l47.5136 6.912a25.6 25.6 0 0 1 14.1824 43.6224l-34.4064 33.536a25.6 25.6 0 0 0-7.3216 22.6304l8.0896 47.36a25.6 25.6 0 0 1-37.12 26.9824l-42.496-22.3744a25.6 25.6 0 0 0-23.8592 0z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".85"
      />
    </Svg>
  );
};

YpIconRemarkHig.defaultProps = {
  size: 18,
};

YpIconRemarkHig = React.memo ? React.memo(YpIconRemarkHig) : YpIconRemarkHig;

export default YpIconRemarkHig;
