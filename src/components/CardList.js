import ProductCard from "./ProductCard";
import {FlatList} from "react-native";
import React from "react";
import UIConstants from "../constants/UIConstants";

const CardList = ({DATA}) => {

    const _renderItem = ({item}) => {
        return (
            <ProductCard item={item}/>
        );
    }
    return (
        <FlatList
            numColumns={UIConstants.CardListColumnCount}
            data={DATA}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default CardList;