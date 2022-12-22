import {Text, TextInput, View} from "react-native";

const CustomTextInput = ({label, input, inputHandler}) => {
    return (
        <View>
            {label &&
                <Text>{label}</Text>
            }
            <TextInput
                value={input.toString()}
                onChangeText={(text) => {
                    inputHandler(text)
                }}
            />
        </View>
    )

}

export default CustomTextInput;