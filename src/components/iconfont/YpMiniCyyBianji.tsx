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

let YpMiniCyyBianji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M864.768 975.36H154.112A100.928 100.928 0 0 1 53.76 874.496V190.464c0-55.808 45.056-100.864 100.352-100.864h384c20.992 0 38.4 17.408 38.4 38.4 0 20.992-17.408 38.4-38.4 38.4h-384a23.616 23.616 0 0 0-23.552 24.064v683.52c0 13.312 10.752 24.064 23.552 24.064h710.144a23.616 23.616 0 0 0 23.552-24.064v-376.32c0-20.992 17.408-38.4 38.4-38.4 20.992 0 38.4 17.408 38.4 38.4v376.832a100.224 100.224 0 0 1-99.84 100.864z m-490.496-295.936a37.12 37.12 0 0 1-27.136-11.264 38.656 38.656 0 0 1 0-54.272l552.96-548.864a38.656 38.656 0 0 1 54.272 0 38.656 38.656 0 0 1 0 54.272l-552.96 548.864a37.12 37.12 0 0 1-27.136 11.264z"
        fill={getIconColor(color, 0, '#0092FF')}
      />
    </Svg>
  );
};

YpMiniCyyBianji.defaultProps = {
  size: 18,
};

YpMiniCyyBianji = React.memo ? React.memo(YpMiniCyyBianji) : YpMiniCyyBianji;

export default YpMiniCyyBianji;
