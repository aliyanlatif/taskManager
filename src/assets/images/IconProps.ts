import { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface IconProps extends Partial<SvgProps> {
  color?: ColorValue;
  height?: number | string;
  width?: number | string;
  style?: StyleProp<ViewStyle>;
}
