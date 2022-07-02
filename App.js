import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import ListInput from './components/ListInput';
import ListItem from './components/ListItem';

export default function App() {
  
  const [toDoList, setToDoList] = useState([])
  const [modalVisibility, setModalVisibility] = useState(false)

  function addToList(text){
    setToDoList(prev=>[...prev, {text: text, id:Math.random()}])
  }

  function takeInput(){
    setModalVisibility(!modalVisibility)
  }

  function deleteItem(id){
    setToDoList(prev =>{
      return prev.filter((item)=> item.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Item' color="green" onPress={takeInput}/>
      <ListInput addToList={addToList} visibility={modalVisibility} changeVis={takeInput}/>
      <View style={styles.listContainer}>
        <FlatList data={toDoList} renderItem={data => {
          return <ListItem text={data.item.text} deleteItem={deleteItem} id={data.item.id}/>
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