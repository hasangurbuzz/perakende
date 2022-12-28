import CartItem from "./CartItem";
import {FlatList} from "react-native";
import React from "react";

const DetailedList = ({DATA}) => {

    return(
        <FlatList data={DATA} renderItem={({item}) => {
            return (
                <CartItem cartItem={item}/>
            )
        }}/>
    );
}

export default DetailedList;