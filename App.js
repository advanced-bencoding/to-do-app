import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = useState('')
  const [toDoList, setToDoList] = useState([])

  function controlledInput(enteredText){
    setText(enteredText)
  }

  function addToList(){
    setToDoList(prev=>[...prev, text])
    setText('')
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}  placeholder='To do' onChangeText={controlledInput} value={text}/>
        <Button title='Add to List' onPress={addToList}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList data={toDoList} renderItem={item => {
          return(
            <Text style={styles.listItem}>{item.item}</Text>
          )
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

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 5,
  },

  listContainer: {
    flex: 10,
    marginTop: 10,
  },

  listItem:{
    marginVertical: 5,
    padding: 10,
    fontSize: 20,
    borderWidth: 0.5,
    borderRadius: 10
  }
});