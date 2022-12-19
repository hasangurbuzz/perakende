import {FlatList, Text, View} from "react-native";
import ProductCard from "./ProductCard";
import React, {forwardRef, useImperativeHandle} from "react";

const List = forwardRef(({DATA, handleScroll}, refer) => {

    useImperativeHandle(refer, () => ({
        scroll(index) {
            refer.scrollToIndex({animated: true, index: index});
        }
    }))

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'space-between'

        }}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                onMomentumScrollEnd={
                    (event) => {
                        let index = Math.floor(
                            Math.floor(event.nativeEvent.contentOffset.y) /
                            Math.floor(240)
                        );
                        handleScroll(index)
                    }
                }
                ref={(ref) => {
                    refer = ref;
                }}
                data={Object.keys(DATA)}
                renderItem={({item}) => {
                    return (
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 19, marginLeft:10}}>{item}</Text>
                            <FlatList
                                numColumns={3}
                                data={DATA[item]}
                                renderItem={({item}) => {
                                    return (
                                        <ProductCard item={item}/>
                                    );
                                }
                                }
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    )
                }}
            />
        </View>
    );
})


export default List;