/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native';
import React from 'react';
import App from '../App';
import Button from '../src/mocks/Button';
import GroceryShoppingList from '../src/mocks/GrocceryShoppingList';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent} from '@testing-library/react-native';

it('renders correctly=====', () => {
  renderer.create(<App />);
});

it('renders correctly across screens', () => {
  const tree = renderer.create(<Button />).toJSON();
  console.log('===tree====', tree);
  expect(tree).toMatchSnapshot();
});

test('given empty GroceryShoppingList, user can add an item to it', () => {
  const {getByPlaceholder, getByText, getAllByText} = renderer(
    <GroceryShoppingList />,
  );

  fireEvent.changeText(getByPlaceholder('Enter grocery item'), 'banana');
  fireEvent.press(getByText('Add the item to list'));

  const bananaElements = getAllByText('banana');
  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
});
