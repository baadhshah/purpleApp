import * as React from 'react';
import {View, Text, Button} from 'react-native';
export const Detail = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome to Detail Screen</Text>
      <Button title="Tab View" onPress={() => navigation.navigate('TabView')} />
    </View>
  );
};
export default Detail;
