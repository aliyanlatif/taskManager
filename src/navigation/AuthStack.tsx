import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackParams from './AuthStackParams';
import {HomeScreen, AddTaskScreen} from '../screens';

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthenticatedScreens = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen component={HomeScreen} name="HomeScreen" />
      <AuthStack.Screen component={AddTaskScreen} name="AddTaskScreen" />
    </AuthStack.Navigator>
  );
};
