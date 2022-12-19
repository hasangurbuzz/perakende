import {Text, TouchableOpacity} from "react-native";
import ButtonStyles from "../styles/ButtonStyles";

const CustomRadioButton = ({category, setChosen, index, listIndex}) => {
    return (
        <TouchableOpacity
            style={{
                ...ButtonStyles.CustomRadioButtonStyle,
                backgroundColor: index === listIndex ? 'orange' : 'white',
            }}
            onPress={() => setChosen(index)}>
            <Text>{category}</Text>
        </TouchableOpacity>
    )
}

export default CustomRadioButton;