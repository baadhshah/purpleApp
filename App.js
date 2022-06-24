// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import Home from './src/screens/home';
import Detail from './src/screens/detail';
import TabView from './src/screens/tab';
import MyDrawer from './src/screens/myDrawer';
import BottomTab from './src/screens/bottomTab';
import TopTab from './src/screens/topTab';
import BottomTabMaterial from './src/screens/bottomTabMaterial';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'My Home'}}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="TabView" component={TabView} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="TopTab" component={TopTab} />
        <Stack.Screen name="BottomTabMaterial" component={BottomTabMaterial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
