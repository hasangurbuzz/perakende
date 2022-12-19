import {View} from "react-native";
import {useProduct} from "../context/ProductContext";
import List from "../components/List";
import React, {useEffect, useRef, useState} from "react";
import {Product} from "../model/Product"
import {getAllProducts} from "../data/client/ProductApi";
import CustomTab from "../components/CustomTab";
import {groupByCategories} from "../helper/ProductHelper";


const HomeScreen = ({navigation}) => {

    const {state, addProduct} = useProduct();
    const flatListRef = useRef();
    const tabRef = useRef();
    const [listIndex, setListIndex] = useState(0);

    const handleChoose = (chosenIndex) => {
        setListIndex(chosenIndex)
        flatListRef.current.scroll(chosenIndex)
        tabRef.current.scroll(chosenIndex)
    }

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                data.map((product) => {
                    addProduct(Product.createFromDto(product))
                })
            })
    }, [])

    let data = groupByCategories(state)


    const handleScroll = (index) => {
        setListIndex(index)
        tabRef.current.scroll(index)
    }

    return (
        <View style={{flex: 1}}>
            <CustomTab ref={tabRef} listIndex={listIndex} handleChoose={handleChoose}/>
            <List DATA={data} ref={flatListRef} handleScroll={handleScroll}/>
        </View>
    );

}


export default HomeScreen;