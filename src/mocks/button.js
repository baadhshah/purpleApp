import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
function Button({onPress}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: 'green'}]}
      onPress={onPress}>
      <Text style={styles.text}>Register</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
export default Button;
