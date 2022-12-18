import {Button, Text, TouchableOpacity, View} from "react-native";
import {Context, useProduct} from "../context/ProductContext";
import List from "../components/List";
import React, {useContext, useEffect} from "react";
import {Product} from "../model/Product"
import {getAllProducts} from "../data/client/ProductApi";
import ProductCard from "../components/ProductCard";


const HomeScreen = ({navigation}) => {

    const {state, addProduct} = useProduct();

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                data.map((product) => {
                    addProduct(Product.createFromDto(product))
                })
            })
    }, [])



    return (
        <View style={{flex: 1}}>
            <List DATA={state}/>
        </View>
    );

}


export default HomeScreen;