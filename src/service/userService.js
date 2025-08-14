import { get, patch, post, del } from "../utils/request";

export const getUser= async (params) => {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
    const query = new URLSearchParams(filteredParams).toString();
    const result = await get(`admin/users?${query}`);
    return result;
}

export const deleteUser = async (params) => {
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
    const result = await del(`admin/users?${query}`);
    return result;
}

export const createUser = async (option) =>{
    const result = await post(`admin/users`, option);
    return result;
}

export const getDetailUser = async (id) =>{
    const result = await get(`admin/users/${id}`)
    return result;
}
export const editUser = async (option) =>{
    const result = await patch(`admin/users`, option)
    return result;
}