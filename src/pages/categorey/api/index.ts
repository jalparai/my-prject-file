import api from "../../../utils/axios";
import { URLS } from "../../../utils/constants";

export const getAllCategories = async (setCategories: any) => {
    try {
        const response = await api.get(URLS.categories.getAll);
        const data = response?.data.map((ele: any) => {
            return {
                id: ele.id,
                title: ele.title,
                isSubCategory: ele.is_sub_category,
                rank: ele.rank,
                image: ele.image,
                createdAt: ele.createdAt,
            }
        });
        setCategories(data);
    } catch (err) {
        
    }
};