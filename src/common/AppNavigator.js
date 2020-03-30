import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Screen2 from '../screens/Screen2';

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ScreensStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Detail"
      component={Detail}
      options={{
        title: 'Detail',
      }}
    />
  </HomeStack.Navigator>
);

const Screen2StackScreen = () => (
  <ScreensStack.Navigator>
    <ScreensStack.Screen name="Screen2" component={Screen2} />
    <ScreensStack.Screen name="Detail" component={Detail} />
  </ScreensStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Screen2" component={Screen2StackScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={Detail} />
  </Drawer.Navigator>
);

function AppNavigator() {
  return <TabsScreen />;
}

export default AppNavigator;
