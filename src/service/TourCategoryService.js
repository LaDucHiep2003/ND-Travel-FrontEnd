import { get, patch, post, del } from "../utils/request";

export const getCategory= async () => {
    const result = await get(`admin/category`);
    return result;
}

export const deleteCategory = async (params) => {
    const searchParams = new URLSearchParams();
    for (const key in params) {
        const value = params[key];
        if (Array.isArray(value)) {
            value.forEach(v => searchParams.append(key, v));
        } else {
            searchParams.append(key, value);
        }
    }
    const query = searchParams.toString();
    const result = await del(`admin/category?${query}`);
    return result;
}

export const createCategory = async (option) =>{
    const result = await post(`admin/category`, option);
    return result;
}

export const getDetailCategory = async (id) =>{
    const result = await get(`admin/category/${id}`)
    return result;
}
export const editCategory = async (option) =>{
    const result = await patch(`admin/category`, option)
    return result;
}