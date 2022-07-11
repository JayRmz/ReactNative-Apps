import {Button, StyleSheet, TextInput, View, Modal} from "react-native";

export default function GoalInput(props) {

    const {goalInputHandler, addGoalHandler, visible, endAddGoalHanlder} = props;

    return (<Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder=' Add a goal'
                onChangeText={goalInputHandler}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add' onPress={addGoalHandler}/>
                </View>
                <View style={styles.button} >
                    <Button title='Cancel' onPress={endAddGoalHanlder}/>
                </View>
            </View>
        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    }, textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    }, buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    }, button: {
        width: 100,
        marginHorizontal: 8
    }
});
