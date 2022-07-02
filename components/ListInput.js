import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal } from "react-native"

export default function ListInput(props){
    const [text, setText] = useState('')

    function controlledInput(enteredText){
        setText(enteredText)
    }

    function listCheckAndAdd(){
        if(text!=""){
            props.addToList(text)
            setText("")
            props.changeVis()
        }
    }

    function cancel(){
        props.changeVis()
        setText("")
    }

    return(
        <Modal visible={props.visibility} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}  placeholder='To do' onChangeText={controlledInput} value={text}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add to List' onPress={listCheckAndAdd}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={cancel}/>
                    </View>               
                </View>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  button: {
    width:'25%',
    marginHorizontal: 25,
    marginVertical: 20
  }
})