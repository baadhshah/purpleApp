import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from './feed';
import Messages from './messages';
const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Messages" component={Messages} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
