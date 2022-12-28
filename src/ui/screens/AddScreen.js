import {Button, View, Text, ToastAndroid} from "react-native";
import {useState} from "react";

import {useProduct} from "../../context/ProductContext";
import {Product} from "../../model/Product";
import CustomPicker from "../components/Picker";
import CustomImagePicker from "../components/ImagePicker";
import {getAllCategories} from "../../helper/ProductHelper";
import CustomTextInput from "../components/CustomTextInput";
import PriceInput from "../components/PriceInput";
import {formatPriceInput, mergePriceAndDecimal} from "../../util/commonUtil";
import ScreenConstants from "../../constants/ScreenConstants";


const AddScreen = ({navigation}) => {


    const {state, addProduct} = useProduct();
    const categories = getAllCategories(state)
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [decimal, setDecimal] = useState(0);
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
        let productPrice = mergePriceAndDecimal(price, decimal)
        addProduct(
            new Product(productName, imageUri, selectedCategory, Number(productPrice))
        )
        setSelectedCategory(categories[0])
        setProductName("")
        setImageUri(null)
        setPrice(0)
        setDecimal(0)
        ToastAndroid.show("Ürün başarıyla eklendi", ToastAndroid.SHORT)
        navigation.navigate(ScreenConstants.HomeScreen);
    }

    const priceInputHandler = (priceInput) => {
        let price = formatPriceInput(priceInput)
        setPrice(price);
    }

    const decimalInputHandler = (decimalInput) => {
        let decimalPrice = formatPriceInput(decimalInput);
        setDecimal(decimalPrice);
    }


    return (
        <View style={{paddingTop: 20, padding: 5}}>
            <CustomTextInput label={'Ürün Adı Giriniz'} input={productName} inputHandler={productNameInputHandler}/>

            <Text>Kategori Seçiniz</Text>
            <CustomPicker
                selectedValue={selectedCategory}
                setSelectedValue={categoryHandler}
                selectableValues={categories}
            />
            <PriceInput price={price} priceInputHandler={priceInputHandler} decimal={decimal}
                        decimalInputHandler={decimalInputHandler}/>
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