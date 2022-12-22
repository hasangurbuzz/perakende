import {Button, Image, TouchableOpacity, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Styles from "../styles/Styles";
import ImagePickerConstants from "../constants/ImagePickerConstants";
import ImagePickerConfig from "../config/ImagePickerConfig";
import {FontAwesome} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import IconButton from "./IconButton";
import Icons from "../styles/Icons";

const CustomImagePicker = ({image, setImage}) => {


    const handleImage = async (imageFrom) => {
        let result;
        switch (imageFrom) {
            case ImagePickerConstants.FROM_CAMERA: {
                result = await ImagePicker.launchCameraAsync(
                    ImagePickerConfig
                )
                break
            }
            case ImagePickerConstants.FROM_GALLERY: {
                result = await ImagePicker.launchImageLibraryAsync(
                    ImagePickerConfig
                )
                break
            }
        }

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
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent:'space-around'
            }}>
                <IconButton icon={Icons.CAMERA} onPress={() => handleImage(ImagePickerConstants.FROM_CAMERA)}/>
                <IconButton icon={Icons.PHOTO} onPress={() => handleImage(ImagePickerConstants.FROM_GALLERY)}/>
            </View>
        </View>);
}


export default CustomImagePicker;