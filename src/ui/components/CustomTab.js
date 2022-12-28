import {FlatList, View} from "react-native";
import {useProduct} from "../../context/ProductContext";
import {getAllCategories} from "../../helper/ProductHelper";
import React, {forwardRef, useImperativeHandle} from "react";
import CustomRadioButton from "./CustomRadioButton";

const CustomTab = forwardRef(({listIndex, handleChoose}, refer) => {

    useImperativeHandle(refer, () => ({
        scroll(index) {
            refer.scrollToIndex({animated: true, index: index});
        }
    }))

    const {state} = useProduct();
    let categories = getAllCategories(state);

    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                ref={(ref) => {
                    refer = ref;
                }}
                data={categories}
                renderItem={({item, index}) => {
                    return <CustomRadioButton
                        category={item}
                        index={index}
                        listIndex={listIndex}
                        setChosen={handleChoose}
                    />
                }}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
})
export default CustomTab;