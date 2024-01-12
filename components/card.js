import { View, Text } from "react-native";
import { CardStyle } from "../theme";
import { Colors } from "../theme/colors";

export const Card = ({ title, content, type }) => {

    const card_bg_style = type == "dark" ? {
        backgroundColor: Colors.BLACK
    } : { backgroundColor: Colors.WHITE }

    const card_text_style = type == "dark" ? {
        color: Colors.WHITE
    } : { color: Colors.BLACK }

    return (
        <View style={[CardStyle.card, card_bg_style]}>
            <Text style={[CardStyle.title, card_text_style]}>{title}</Text>
            <Text style={[CardStyle.content, card_text_style]}>{content}</Text>
        </View>
    )
}