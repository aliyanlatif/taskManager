import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './IconProps';
import AppColors from '../../theme/appColor';

export function PlusIcon({
  width = 30,
  height = 30,
  color = AppColors.white,
  ...rest
}: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...rest}>
      <Path
        d="M6 12H18M12 6V18"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
