import {FlatList, Image, Text, View} from "react-native";
import ProductCard from "./ProductCard";
import React from "react";

const List = ({DATA}) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'space-between'

        }}>
            <FlatList
                numColumns={3}
                data={DATA}
                renderItem={({item}) => {
                    return (
                        <ProductCard item={item}/>
                    );
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default List;