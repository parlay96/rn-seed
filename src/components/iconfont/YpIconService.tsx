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

let YpIconService: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M850.688 341.290667H896a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667a85.333333 85.333333 0 0 1-85.333333 85.333333h-45.312a341.333333 341.333333 0 0 1-338.688 298.666667v-85.333334a256 256 0 0 0 256-256v-256a256 256 0 1 0-512 0v298.666667H128a85.333333 85.333333 0 0 1-85.333333-85.333333v-170.666667a85.333333 85.333333 0 0 1 85.333333-85.333333h45.312a341.376 341.376 0 0 1 677.376 0zM128 426.624v170.666667h42.666667v-170.666667H128z m725.333333 0v170.666667h42.666667v-170.666667h-42.666667zM331.093333 673.450667l45.226667-72.362667a254.805333 254.805333 0 0 0 135.68 38.826667c32 0.085333 77.226667-12.885333 135.68-38.826667l45.226667 72.362667C614.954667 708.053333 554.666667 725.333333 512 725.290667a339.754667 339.754667 0 0 1-180.906667-51.84z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconService.defaultProps = {
  size: 18,
};

YpIconService = React.memo ? React.memo(YpIconService) : YpIconService;

export default YpIconService;
