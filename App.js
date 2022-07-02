import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState('')
  const [toDoList, setToDoList] = useState([])

  function controlledInput(enteredText){
    setText(enteredText)
  }

  function addToList(){
    setToDoList(prev=>[...prev, text])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}  placeholder='To do' onChangeText={controlledInput}/>
        <Button title='Add to List' onPress={addToList}/>
      </View>
      <View style={styles.listContainer}>
        {
          toDoList.map((x,i) => <Text key={i}>{x}</Text>)
        }
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
  }
});