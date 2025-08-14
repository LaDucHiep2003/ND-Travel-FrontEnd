import { get, patch, post, del } from "../utils/request";

export const getOrders= async (params) => {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
    const query = new URLSearchParams(filteredParams).toString();
    const result = await get(`admin/orders?${query}`);
    return result;
}

export const deleteOrder = async (params) => {
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
    const result = await del(`admin/orders?${query}`);
    return result;
}

export const createOrder = async (option) =>{
    const result = await post(`admin/orders`, option);
    return result;
}

export const confirm = async (option) =>{
    const result = await post(`admin/orders/confirm`, option);
    return result;
}

export const getDetailOrder = async (id) =>{
    const result = await get(`admin/orders/${id}`)
    return result;
}
export const editRole = async (option) =>{
    const result = await patch(`admin/orders`, option)
    return result;
}
