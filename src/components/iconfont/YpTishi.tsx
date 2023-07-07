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

let YpTishi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M797.8144 769.5616h-74.928v-234.144c0-118.6368-96.7776-212.2944-212.2912-212.2944S298.304 419.904 298.304 535.4144v234.144H223.376c-6.2432 0-9.3664 6.2464-9.3664 9.3696v43.7056c0 6.2432 6.2432 9.3664 9.3664 9.3664h577.5616c6.24 0 9.3664-6.2432 9.3664-9.3664v-43.7056c0-3.1232-6.2464-9.3664-12.4896-9.3664z m-199.8048-237.2704l-109.2672 128c0 3.1232-3.1232 3.1232-6.2464 0-3.12-3.12-3.12-3.12 0-3.12l12.4896-87.4144H426.304c-3.1232 0-3.1232 0-6.2464-3.1232v-6.2432l109.2704-128c0-3.1232 3.12-3.1232 6.24 0 3.1232 3.1232 6.2464 0 3.1232 3.1232l-12.4864 87.4144h68.6816c3.1232 0 3.1232 0 6.2464 3.12 0 3.1232 0 6.2432-3.1232 6.2432zM479.376 192h62.4384v87.4144h-62.4384V192zM310.7904 254.4384l56.192-31.2192 43.712 74.928-56.1984 31.2192-43.7056-74.928zM198.4 391.808l31.2192-56.1952 74.928 43.7088-31.2192 56.192L198.4 391.808z m518.2432-12.4864l74.928-43.7088 31.2192 56.1952-74.928 43.7088-31.2192-56.1952z m-106.144-81.1712l43.7056-74.928L710.4 254.4384l-43.7088 74.928-56.192-31.2192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpTishi.defaultProps = {
  size: 18,
};

YpTishi = React.memo ? React.memo(YpTishi) : YpTishi;

export default YpTishi;
