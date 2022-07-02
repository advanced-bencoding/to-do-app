import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListInput from './components/ListInput';
import ListItem from './components/ListItem';

export default function App() {
  
  const [toDoList, setToDoList] = useState([])

  function addToList(text){
    setToDoList(prev=>[...prev, text])
  }

  return (
    <View style={styles.appContainer}>
      <ListInput addToList={addToList}/>
      <View style={styles.listContainer}>
        <FlatList data={toDoList} renderItem={data => {
          return <ListItem text={data.item}/>
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
  },

  listContainer: {
    flex: 10,
    marginTop: 10,
  },
});