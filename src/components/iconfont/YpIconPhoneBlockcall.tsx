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

let YpIconPhoneBlockcall: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M216 95.936c49.024-14.08 99.136-3.84 143.36 36.224l7.808 7.36L439.04 211.328c61.184 61.12 46.72 146.24 4.608 193.024l-4.608 4.864-14.4 14.4c-33.152 33.152-36.096 51.072-5.12 83.84l5.12 5.376 89.792 89.664c33.856 33.92 51.648 34.24 83.392 4.16l19.456-19.328c43.968-43.968 128.128-62.464 190.016-7.616l14.72 14.016 70.976 70.976c59.328 59.264 59.008 125.056 22.208 181.76l-6.4 9.28-1.92 2.56-7.552 9.6c-4.928 5.696-9.344 10.24-12.672 13.184l-2.24 1.92-28.8 28.8c-131.008 130.944-401.152 48.64-572.8-116.48l-9.088-8.832-32.64-32.64C71.04 584-18.56 311.424 104.96 175.36l6.784-7.104 30.144-30.08c17.6-16.64 42.624-33.28 74.112-42.24z m96.896 97.92c-41.28-41.28-81.664-32-113.6-4.096l-4.352 3.904-28.928 28.928c-91.776 91.712-20.48 320.896 120.768 468.16l8.576 8.768 28.672 28.672 12.736 12.48c142.592 136.448 363.52 205.76 458.816 122.24l5.76-5.44 31.232-30.976c3.2-2.688 9.28-9.024 15.488-17.792 20.16-28.544 22.336-54.592-4.096-84.096l-5.248-5.568-70.4-70.4-8.192-7.872c-25.408-25.344-64.448-19.2-84.928-2.432l-3.584 3.264-14.4 14.4c-61.056 61.056-124.928 68.224-190.336 7.36l-6.784-6.528-89.728-89.664c-66.112-66.048-63.488-130.304-6.144-191.552l6.144-6.336 14.336-14.336c17.984-17.984 26.624-56.768 4.48-84.288l-4.48-4.992L312.96 193.856z m403.2-138.112l94.528 94.592L905.216 55.68a44.608 44.608 0 0 1 63.04 63.04l-94.592 94.592L968.32 307.84a44.608 44.608 0 0 1-63.04 63.04l-94.592-94.528-94.528 94.528a44.608 44.608 0 1 1-63.04-63.04l94.528-94.528-94.528-94.592a44.608 44.608 0 0 1 63.04-63.04z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

YpIconPhoneBlockcall.defaultProps = {
  size: 18,
};

YpIconPhoneBlockcall = React.memo ? React.memo(YpIconPhoneBlockcall) : YpIconPhoneBlockcall;

export default YpIconPhoneBlockcall;
