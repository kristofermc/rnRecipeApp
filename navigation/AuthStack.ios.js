import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            color: '#fa2100',
            elevation: 0,
          },
          headerLeft: () => {
            <View style={{marginLeft: 10}}>
              <Ionicons.Button
                name="arrow-back-outline"
                size={25}
                backgroundColor="#fff"
                color="#fa2100"
                onPress={() => navigation.navigate('Login')}
              />
            </View>;
          },
          /*          headerLeft: () => {
            <View style={{marginLeft: 10}}>
              <Ionicons.Button
                name="arrow-back-outline"
                size={25}
                backgroundColor="#000"
                color="#000"
                onPress={() => navigation.navigate('Login')}
              />
            </View>;
          },*/
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
