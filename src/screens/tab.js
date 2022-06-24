import * as React from 'react';
import {View, Text, Button} from 'react-native';
import Feed from './feed';
import Messages from './messages';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export const TabView = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};
export default TabView;
