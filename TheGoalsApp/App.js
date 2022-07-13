import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import Static from "react-native-web/dist/modules/prefixStyles/static";

export default function App() {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [listGoals, setListGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setListGoals((prevState) => [...prevState, {text: enteredGoalText, id: Math.random().toString()}]);
        endAddGoalHanlder()
    }

    function deleteGoalHandler(id) {
        setListGoals((prevState) => {
            return listGoals.filter((goal) => goal.id !== id);
        });
    }

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHanlder() {
        setModalIsVisible(false);
    }

    return (
        <>
            <StatusBar style='light'></StatusBar>
            <View style={styles.appContainer}>
                <Button title='Add Goal' color='#a065ec' onPress={startAddGoalHandler}/>
                <GoalInput goalInputHandler={goalInputHandler}
                           visible={modalIsVisible}
                           addGoalHandler={addGoalHandler}
                           endAddGoalHanlder={endAddGoalHanlder}/>

                <View style={styles.goalsContainer}>
                    <FlatList data={listGoals}
                              renderItem={(itemData) => {
                                  return (
                                      <GoalItem text={itemData.item.text}
                                                id={itemData.item.id}
                                                onDelete={deleteGoalHandler}/>
                                  )
                              }}
                              keyExtractor={(item, index) => {
                                  return item.id
                              }}
                              alwaysBounceVertical={false}/>
                </View>

            </View>
        </>

    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a'
    },
    goalsContainer: {
        flex: 5
    },
});
