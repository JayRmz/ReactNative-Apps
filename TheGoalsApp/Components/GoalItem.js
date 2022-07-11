import {StyleSheet, Text, View, Pressable} from "react-native";

export default function GoalItem(props) {
    const {text, id, onDelete} = props;
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#210644'}}
                       onPress={onDelete.bind(this, id)}
                       style={({pressed})=> pressed && styles.pressedItem}>

                <Text style={styles.goalTextItem}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalTextItem: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    }
});
