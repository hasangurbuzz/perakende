import {Text, TouchableOpacity} from "react-native";
import ButtonStyles from "../styles/ButtonStyles";

const CustomButton = ({onPressCallback, title}) => {
    return (
        <TouchableOpacity style={ButtonStyles.CustomButtonStyle}
                          onPress={onPressCallback}>
            <Text
                style={ButtonStyles.CustomButtonTitleStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;