import { get, patch, post, del } from "../utils/request";

export const login = async (option) =>{
    const result = await post(`login`, option);
    return result;
}