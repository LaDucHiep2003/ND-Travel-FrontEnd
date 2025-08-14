import { get, patch, post, del } from "@/utils/request.js";


export const getTours = async (params) => {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
    const query = new URLSearchParams(filteredParams).toString();
    const result = await get(`tours?${query}`);
    return result;
}