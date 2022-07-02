import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

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
        <Modal visible={props.visibility} animationType="slide" style={styles.modal}>
            <View style={styles.inputContainer}>
                <Image source={require('../images/notes.png')} style={styles.image}/>
                <TextInput style={styles.textInput}  placeholder='To do' onChangeText={controlledInput} value={text}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add to List' onPress={listCheckAndAdd} color='green'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={cancel} color='red'/>
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
    padding: 10,
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
  },

  image:{
    width: 100,
    height: 100,
    marginBottom: 20
  },
})