import axios from "axios";
import {requestLogger, responseLogger} from "./ClientLogger";
import ApiClientConstants from "../../constants/ApiClientConstants";

const ApiClient = axios.create({
    baseURL: ApiClientConstants.BASE_URL
})


ApiClient.interceptors.request.use(
    (request) => {
        requestLogger(request)
        return request
    }
)

ApiClient.interceptors.response.use(
    (response) => {
        responseLogger(response)
        return response
    }
)

export { ApiClient }