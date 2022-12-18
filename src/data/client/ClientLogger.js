const requestLogger = (AxiosRequestConfig) => {
    const { method, url } = AxiosRequestConfig
    console.log(`${method} -> ${url}`);
}

const responseLogger = (AxiosResponse) => {
    const { config, status } = AxiosResponse
    console.log(`${config.url} <- ${status}`)
}

export { requestLogger, responseLogger }