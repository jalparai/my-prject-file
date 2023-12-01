import api from "../../../utils/axios";
import { URLS } from "../../../utils/constants";

export const getAllUsers = async (setUsers: any) => {
    try {
        const response = await api.get(URLS.users.getAll);
        const data = response?.data.map((ele: any) => {
            return {
                id: ele.id,
                lastName: ele.name + ' ' + ele.lastname,
                createdAt: ele.createdAt,
            }
        });
        setUsers(data);
    } catch (err) {
        
    }
};