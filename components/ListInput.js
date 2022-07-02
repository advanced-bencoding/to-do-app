import { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

export default function ListInput(props){
    const [text, setText] = useState('')

    function controlledInput(enteredText){
        setText(enteredText)
    }

    function listCheckAndAdd(){
        if(text!=""){
            props.addToList(text)
            setText("")
        }
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}  placeholder='To do' onChangeText={controlledInput} value={text}/>
            <Button title='Add to List' onPress={listCheckAndAdd}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
})