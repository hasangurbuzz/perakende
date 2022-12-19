import {Button, Image, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Styles from "../styles/Styles";


const CustomImagePicker = ({image, setImage}) => {

    const handleImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync(
            {
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            }
        )
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <View>
            {image !== null &&
                <Image style={Styles.ImagePickerStyle.preview}
                       source={{uri: image}}/>
            }
            <Button
                title={'Yükle'}
                    onPress={handleImage}/>
        </View>);
}


export default CustomImagePicker;