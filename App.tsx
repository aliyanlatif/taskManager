import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthenticatedScreens} from './src/navigation/AuthStack';

export default function MainStack() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const navigationTheme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <SafeAreaProvider
      style={[
        styles.container,
        {backgroundColor: backgroundStyle.backgroundColor},
      ]}>
      <GestureHandlerRootView>
        <NavigationContainer
          fallback={<ActivityIndicator animating />}
          theme={navigationTheme}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            translucent
            backgroundColor={'transparent'}
          />
          <AuthenticatedScreens />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
