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

let YpIconShareTbPyq: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c283.3152 0 512 228.6848 512 512s-228.6848 512-512 512S0 795.3152 0 512 228.6848 0 512 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M610.688 437.4016v-205.312c-5.248-1.664-12.2368-3.3792-17.5104-5.0688-25.088-6.8352-50.9952-10.24-77.0048-10.1888-12.2624 0-22.7584 0-33.28 1.7152a391.2192 391.2192 0 0 0-76.9792 18.6624c-1.7664 1.6896 199.5264 193.408 204.8 200.192z m157.5424-66.432c-3.328-5.12-4.992-11.9552-8.3456-17.0752-11.6736-22.2208-26.7008-41.0112-45.056-59.8016-8.32-8.5248-14.976-15.36-23.3216-22.1952-20.0192-17.1008-41.728-29.056-65.0752-39.296 0 0 1.6896 275.0208 0 283.5712l141.824-145.2032z m29.7984 111.3088a385.9456 385.9456 0 0 0-18.6368-76.3904s-191.744 197.8624-200.192 204.8h205.2608c1.7152-5.1968 3.4048-12.16 5.12-17.3568 6.7584-24.2944 10.1632-50.3296 10.1632-76.3648 0-12.1344 0-22.5536-1.7152-34.7136z m-313.3696 159.9232l145.2032 141.7728c5.12-3.328 11.9552-4.992 17.0752-8.3456 22.2208-11.6736 41.0112-26.7008 59.8016-45.0304 8.5248-8.3456 15.36-15.0272 22.1952-23.3472 17.0752-20.0192 29.056-41.7024 39.296-65.0496 0 0-275.0208 1.6384-283.5712 0zM421.632 594.944v205.2864c5.2736 1.6896 12.2624 3.3792 17.5104 5.0688a290.304 290.304 0 0 0 77.0304 10.1888c12.2368 0 22.7584 0 33.2544-1.7152a391.1168 391.1168 0 0 0 77.0048-18.6368c0-1.7152-199.5264-193.4336-204.8-200.192z m-31.488-94.5408L248.3456 645.632c3.328 5.12 5.0176 11.9552 8.3456 17.1008 11.6736 22.1952 26.7008 40.9856 45.056 59.776 8.32 8.5248 15.0016 15.36 23.3472 22.2208 19.9936 17.0752 41.7024 29.0304 65.0496 39.2704 0 1.7152-1.664-273.3056 0-283.5456z m47.2576-78.7712H232.2176c-1.6896 5.248-3.4048 12.2624-5.12 17.5104-6.8864 25.088-10.3424 50.9952-10.2656 77.0048 0 12.2624 0 22.784 1.7152 33.28 3.4048 26.24 10.24 52.48 18.7904 77.0048 0 0 193.2288-199.552 200.064-204.8z m78.7712-15.744L370.944 248.32c-5.12 3.6608-11.9552 7.3216-17.0752 9.1648a514.56 514.56 0 0 0-59.8016 49.4336c-6.8352 9.1904-15.36 18.3296-22.1952 27.4944-17.1008 21.9904-29.056 45.7984-39.296 71.424 0 0 275.0208-1.8176 283.5712 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconShareTbPyq.defaultProps = {
  size: 18,
};

YpIconShareTbPyq = React.memo ? React.memo(YpIconShareTbPyq) : YpIconShareTbPyq;

export default YpIconShareTbPyq;
