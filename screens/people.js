import { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import people from "../assets/people.json";
import { Card } from "../components/card";
import CardVisit from "../components/cardvisit";
import { Colors } from "../theme/colors";

export default class People extends Component {
    render() {
        console.log(people);
        return <ScrollView contentContainerStyle={styles.container}>
            {people.map((item, index) => (
                <CardVisit key={index}
                    photo={item['profile_picture']}
                    name={item['first_name']}
                    surname={item['last_name']}
                    email={item["email"]}
                    style={{
                        width: '80%', 
                        shadowColor: "black",
                        shadowOffset: { width: 0, height: 2},
                        shadowOpacity: .2,
                        shadowRadius: 4,
                        elevation: 4
                    }} />
            ))}
        </ScrollView>
    }
}
const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    }
});