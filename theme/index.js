import { StyleSheet } from "react-native";
import { Colors, FontSizes } from "./colors";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWhite: {
        color: Colors.WHITE
    },
    h1: {
        fontSize: FontSizes.H1,
        fontWeight: "bold"
    }
});

export const CardStyle = StyleSheet.create({
    card: {
        maxWidth:'80%',
        backgroundColor: Colors.WHITE,
        borderRadius: 7,
        padding: 16,
        margin: 8,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .2,
        shadowRadius: 4,
        elevation: 4
    },
    title: {
        fontSize: FontSizes.H3,
        fontWeight: "bold",
        marginBottom: 8,
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    content:{
        fontSize: FontSizes.P
    }
});