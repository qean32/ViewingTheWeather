import { axiosInstance } from "./instance"

class serverServiceClass {
    get_5days(key: string | number) {
        return axiosInstance.get(`${process.env.SERVER_HOST}_5day?key=${key}`)
    }

    getTowns() {
        return axiosInstance.get(`${process.env.SERVER_HOST}towns`)
    }

    search(search: string) {
        return axiosInstance.get(`${process.env.SERVER_HOST}search?search=${search}`)
    }
}

export const serverService = new serverServiceClass()