import { StyleSheet, Text } from "react-native"

export default function ListItem(props){
    return(
        <Text style={styles.listItem}>{props.text}</Text>
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