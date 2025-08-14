import { get, patch, post, del } from "../utils/request";

export const getRoles= async () => {
    // const filteredParams = Object.fromEntries(
    //     Object.entries(params).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    // );
    // const query = new URLSearchParams(filteredParams).toString();
    const result = await get(`admin/roles`);
    return result;
}
export const getPermissions= async () => {
    const result = await get(`admin/roles/permissions`);
    return result;
}

export const deleteRole = async (params) => {
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
    const result = await del(`admin/roles?${query}`);
    return result;
}

export const createRole = async (option) =>{
    const result = await post(`admin/role`, option);
    return result;
}

export const getDetailRole = async (id) =>{
    const result = await get(`admin/role/${id}`)
    return result;
}
export const editRole = async (option) =>{
    const result = await patch(`admin/role`, option)
    return result;
}