import {Picker} from "@react-native-picker/picker";
import {View} from "react-native";
import BorderStyles from "../../styles/BorderStyles";
import Styles from "../../styles/Styles";

const CustomPicker = ({selectedValue, setSelectedValue, selectableValues}) => {

    return (
        <View style={Styles.PickerStyle.container}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                {
                    selectableValues.map(
                        (item, index) => {
                            return <Picker.Item key={index} label={item} value={item}/>
                        }
                    )
                }
            </Picker>
        </View>
    );

}

export default CustomPicker;