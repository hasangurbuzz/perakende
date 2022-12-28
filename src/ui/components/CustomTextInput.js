import {Text, TextInput, View} from "react-native";
import Styles from "../../styles/Styles";

const CustomTextInput = ({label, input, inputHandler, config}) => {
    let textAlign, maxLength, keyboardType;
    if (config) {
        textAlign = config.textAlign || undefined;
        maxLength = config.maxLength || undefined;
        keyboardType = config.keyboardType || undefined;

    }

    return (
        <View
            style={Styles.CustomTextInputStyle.container}>
            {label &&
                <Text>{label}</Text>
            }
            <TextInput
                maxLength={maxLength}
                textAlign={textAlign}
                style={Styles.CustomTextInputStyle.input}
                numberOfLines={1}
                value={input.toString()}
                onChangeText={(text) => {
                    inputHandler(text)
                }}
                keyboardType={keyboardType}
            />
        </View>
    )

}

export default CustomTextInput;