import { StyleSheet, Text, Pressable } from "react-native"

export default function ListItem(props){
    return(
        <Pressable android_ripple={{color: 'blue'}} onPress={props.deleteItem.bind(this, props.id)}>
            <Text style={styles.listItem}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    listItem:{
        marginVertical: 5,
        padding: 10,
        fontSize: 20,
        borderWidth: 0.5,
        borderRadius: 10
      },
})