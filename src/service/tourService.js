import { get, patch, post, del } from "../utils/request";


export const getTours = async (params) => {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
    const query = new URLSearchParams(filteredParams).toString();
    const result = await get(`admin/tours?${query}`);
    return result;
}
export const getSchedule = async (tourId) => {
    const result = await get(`admin/schedule?tour=${tourId}`);
    return result;
}
export const createTour = async (option) =>{
    const result = await post(`admin/tours`, option);
    return result;
}

export const deleteTour = async (params) => {
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
    const result = await del(`admin/tours?${query}`);
    return result;
}

export const getDetailTour = async (id) =>{
    const result = await get(`admin/tours/${id}`)
    return result;
}
export const editTour = async (option) =>{
    const result = await patch(`admin/tours`, option)
    return result;
}
export const confirmSchedule = async (id, status) =>{
    const result = await patch(`admin/schedule/${id}?status=${status}`);
    return result;
}