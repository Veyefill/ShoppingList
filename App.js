import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [shopItem, setShopItem] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  const Add = () => {
    setShoppingList([...shoppingList, shopItem]);
    setShopItem("");
  }

  const Clear = () => {
    setShoppingList([]);
    setShopItem("");
  }

  return (
    <View style={styles.container}>
      <TextInput style={{ width: 300, borderColor: 'black', borderWidth: 1 }} onChangeText={shopItem => setShopItem(shopItem)} value={shopItem}></TextInput>
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={Add} title="Add"></Button>
        <View style={{ marginLeft: 10 }}>
          <Button onPress={Clear} title="Clear"></Button>
        </View>
      </View>
      <Text style={{ fontWeight: "bold", color: "blue" }}>Shopping List</Text>
      <View style={{ flexDirection: 'row' }}>
        <FlatList
          data={shoppingList}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
