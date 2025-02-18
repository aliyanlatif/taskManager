import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './IconProps';

export function TickIcon({
  width = 30,
  height = 30,
  color = '#8B8787',
  ...rest
}: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      {...rest}>
      <Path
        d="M6.25 15.625L12.0838 21.25L23.75 10"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
