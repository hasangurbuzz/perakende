import {Button, Image, Text, TouchableOpacity, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";
import {Picker} from "@react-native-picker/picker";

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
        if (!result.canceled){
            setImage(result.assets[0].uri)
        }
    }

    return (
        <View>
            {image !== null &&
                <Image style={{width: 200, height: 200}}
                       source={{uri: image}}/>
            }
            <Button title={'Yükle'}
                    onPress={handleImage}/>
        </View>);
}


export default CustomImagePicker;