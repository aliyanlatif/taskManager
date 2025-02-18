import { NavigationProp, useNavigation as rnUseNavigation } from '@react-navigation/native';

import type AuthenticatedStackParams from './AuthStackParams';

export type RootStackParams = AuthenticatedStackParams;
export default function useNavigation<T extends object = AuthenticatedStackParams>() {
  return rnUseNavigation<NavigationProp<T>>();
}
