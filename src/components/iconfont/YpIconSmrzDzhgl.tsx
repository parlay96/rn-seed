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

let YpIconSmrzDzhgl: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M536.3712 111.616l310.1696 179.0464c15.104 8.704 24.4224 24.832 24.4224 42.24v358.1952c0 17.408-9.3184 33.4848-24.4224 42.24l-310.1696 179.0464a48.7424 48.7424 0 0 1-48.7424 0l-310.1696-179.0464a48.7424 48.7424 0 0 1-24.4224-42.24V332.9024c0-17.408 9.3184-33.4848 24.4224-42.24L487.6288 111.616a48.7424 48.7424 0 0 1 48.7424 0zM512 186.1632L229.8368 349.0816v325.7856L512 837.7856l282.112-162.9184V349.0816L512 186.1632z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 341.3504a170.6496 170.6496 0 1 1 0 341.2992 170.6496 170.6496 0 0 1 0-341.2992z m0 76.8a93.8496 93.8496 0 1 0 0 187.6992 93.8496 93.8496 0 0 0 0-187.6992z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

YpIconSmrzDzhgl.defaultProps = {
  size: 18,
};

YpIconSmrzDzhgl = React.memo ? React.memo(YpIconSmrzDzhgl) : YpIconSmrzDzhgl;

export default YpIconSmrzDzhgl;
