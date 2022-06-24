import React from 'react';
import {useState} from 'react';
import {useCallback} from 'react';
import {TextInput, Button, Text} from 'react-native';
function GroceryShoppingList() {
  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState([]);

  const addNewItemToShoppingList = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
  }, [groceryItem, items]);

  return (
    <>
      <TextInput
        value={groceryItem}
        placeholder="Enter grocery item"
        onChangeText={text => setGroceryItem(text)}
      />
      <Button title="Add the item to list" onPress={addNewItemToShoppingList} />
      {items.map(item => (
        <Text key={item}>{item}</Text>
      ))}
    </>
  );
}
export default GroceryShoppingList;
