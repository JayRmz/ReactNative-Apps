import {StyleSheet, TextInput, View, Pressable} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                maxLength={2}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'number-pad'}/>
            <PrimaryButton>
                Reset
            </PrimaryButton>
            <PrimaryButton>
                Confirm
            </PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#5b052f',
        borderRadius: 8,
        elevation: 4,
        shadowRadius: 6,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
