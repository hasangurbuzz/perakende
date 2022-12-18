import {Button, TextInput, View, Text} from "react-native";
import {useState} from "react";

import {useProduct} from "../context/ProductContext";
import {Product} from "../model/Product";
import CustomPicker from "../components/Picker";
import CustomImagePicker from "../components/ImagePicker";


const AddScreen = ({navigation}) => {


    const [productName, setProductName] = useState("");
    const {addProduct} = useProduct();
    const [imageUri, setImageUri] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState();


    const inputHandler = (input) => {
        setProductName(input)
    }

    const categoryHandler = (category) => {
        setSelectedCategory(category)
    }

    const imageHandler = (image) => {
        setImageUri(image)
    }
    const addProductHandler = () => {
        addProduct(
            new Product(productName, imageUri, selectedCategory, 200)
        )
        setProductName("")
        setImageUri(null)
        navigation.pop()
    }

    const selectable = [
        "Yiyecek",
        "İçecek",
        "Oyuncak"
    ]

    return (
        <View style={{paddingTop: 20}}>
            <Text>Ürün Adı Giriniz</Text>
            <TextInput
                value={productName}
                onChangeText={(text) => {
                    inputHandler(text);
                }}
            />
            <Text>Kategori Seçiniz</Text>
            <CustomPicker
                selectedValue={selectedCategory}
                setSelectedValue={categoryHandler}
                selectableValues={selectable}
            />
            <Text>Ürüne Ait Görüntü Ekleyiniz</Text>
            <CustomImagePicker
                image={imageUri}
                setImage={imageHandler}/>
            <Button
                title={'Kaydet'}
                onPress={addProductHandler}
            />
        </View>
    )

}

export default AddScreen;