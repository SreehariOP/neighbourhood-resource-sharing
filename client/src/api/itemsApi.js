// TODO: Implement API functions
import { axiosInstance } from './index';

export const getItems = async() =>{
    const response = await axiosInstance.get('/items')
    return response.data;
}

export const getItemById = async(id) => {
    const response = await axiosInstance.get(`/items/${id}`);
    return response.data;
}

