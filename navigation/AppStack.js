import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormButton from '../components/FormButton';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import TimerScreen from '../screens/TimerScreen';
import AddPostScreen from '../screens/AddPostScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#eb4034',

          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginLeft: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#eb4034"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#eb4034" />
          </View>
        ),
        headerRight: () => (
          <View style={{marginRight: 15}}>
            <TouchableOpacity>
              <Text style={{fontWeight: '600', fontSize: 18, color: '#eb4034'}}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const RecipesStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Recipes"
      component={RecipesScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#eb4034',

          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#eb4034" />
          </View>
        ),
        headerRight: () => (
          <View style={{marginRight: 15}}>
            <TouchableOpacity>
              <Text style={{fontWeight: '600', fontSize: 18, color: '#eb4034'}}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const TimerStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Timer"
      component={TimerScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#eb4034',

          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <Ionicons.Button
              name="arrow-back"
              size={22}
              backgroundColor="#fff"
              color="#eb4034"
              onPress={() => navigation.goBack()}
            />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#eb4034',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={RecipesStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pizza-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Timer"
        component={TimerStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="timer-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
