import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feed from './feed';
import Messages from './messages';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabMaterial = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};
export default BottomTabMaterial;
