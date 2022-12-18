import createDataContext from "./createDataContext";
import {getAllActions} from "../actions/ProductActions";
import productReducer from "../reducer/productReducer";
import {useContext} from "react";
import dummydata from "../data/dummydata";


const {Context, Provider} = createDataContext(
    productReducer,
    getAllActions,
    []
)

const useProduct = () => useContext(Context);

export {useProduct, Provider};