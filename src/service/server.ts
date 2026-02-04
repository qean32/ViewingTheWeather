import { axiosInstance } from "./instance"

class serverServiceClass {
    get_5days() {
        return axiosInstance.get(`${process.env.SERVER_HOST}_5day`)
    }

    getTowns() {
        return axiosInstance.get(`${process.env.SERVER_HOST}towns`)
    }
}

export const serverService = new serverServiceClass()