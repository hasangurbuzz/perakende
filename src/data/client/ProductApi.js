import {ApiClient} from "./ApiClient";

const REQUEST_URL = "/product"

const getAllProducts = async () => {
    try {
        const endpoint = `${REQUEST_URL}`
        const response = await ApiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export {getAllProducts}