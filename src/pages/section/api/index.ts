import api from "../../../utils/axios";
import { URLS } from "../../../utils/constants";

export const getAllSections = async (setSection: any) => {
    try {
        const response = await api.get(URLS.section.getAll);
        const data = response?.data.map((ele: any) => {
            return {
                id: ele.id,
                title: ele.title,
                branch: ele.branch,
                createdAt: ele.createdAt,
            }
        });
        setSection(data);
    } catch (err) {
        
    }
};