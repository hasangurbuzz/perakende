import {Button, TextInput, View, Text} from "react-native";
import {useState} from "react";

import {useProduct} from "../context/ProductContext";
import {Product} from "../model/Product";
import CustomPicker from "../components/Picker";
import CustomImagePicker from "../components/ImagePicker";
import {getAllCategories} from "../helper/ProductHelper";
import CustomTextInput from "../components/CustomTextInput";
import PriceInput from "../components/PriceInput";


const AddScreen = ({navigation}) => {


    const {state, addProduct} = useProduct();
    const categories = getAllCategories(state)
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("0.0");
    const [imageUri, setImageUri] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);


    const productNameInputHandler = (input) => {
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
    }

    const priceInputHandler = (priceInput) => {
        let onlyNumbers = priceInput.replace(/[^0-9]/g, '');
        setPrice(onlyNumbers.toString());
    }



    return (
        <View style={{paddingTop: 20}}>
            <CustomTextInput label={'Ürün Adı Giriniz'} input={productName} inputHandler={productNameInputHandler}/>

            <Text>Kategori Seçiniz</Text>
            <CustomPicker
                selectedValue={selectedCategory}
                setSelectedValue={categoryHandler}
                selectableValues={categories}
            />
            <Text>Ücret</Text>
            <PriceInput price={price} priceInputHandler={priceInputHandler}/>
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