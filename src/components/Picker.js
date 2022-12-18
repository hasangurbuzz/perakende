import {Picker} from "@react-native-picker/picker";

const CustomPicker = ({selectedValue, setSelectedValue, selectableValues}) => {
    return(
        <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}>
            {
                selectableValues.map(
                    (item, index)=>{
                        return <Picker.Item key={index} label={item} value={item}/>
                    }
                )
            }
        </Picker>
    );

}

export default CustomPicker;