import * as React from 'react';
import {View, Text, Button} from 'react-native';
export const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome to Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title="Go to Drawer"
        onPress={() => navigation.navigate('MyDrawer')}
      />
      <Button
        title="Bottom Tab"
        onPress={() => navigation.navigate('BottomTab')}
      />
      <Button title="Top Tab" onPress={() => navigation.navigate('TopTab')} />
      <Button
        title="Bottom Tab Material"
        onPress={() => navigation.navigate('BottomTabMaterial')}
      />
    </View>
  );
};
export default Home;
