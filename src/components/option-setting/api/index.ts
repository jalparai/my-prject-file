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
            }
        });
        setCategories(data);
    } catch (err) {
        
    }
};

export const getAllAllergen = async (setAllAllergen: any) => {
    try {
        const response = await api.get(URLS.allergen.getAll);
        const data = response?.data.map((ele: any) => {
            return {
                id: ele.id,
                special_name: ele.special_name,
                name :ele.name,
                item_name:ele.item_name,
                unlimitedChoice:ele.unlimitedChoice,
                // type:ele.
            }
        });
        setAllAllergen(data);
    } catch (err) {
        
    }
};


export const addNewOption: any = async (payload: Object) => {
    try {
        return await api.post(URLS.options.add, payload);
    } catch (err) {
        return err;
    }
}

export const getOptionById: any = async (id: string, setData: any) => {
    try {
        const response = await api.get(URLS.options.get(id));
        setData(response.data);

    } catch (err) {
        return err;
    }
}

export const updateOptionById: any = async (id: string, payload: any) => {
    try {
        const response = await api.put(URLS.options.get(id), payload);
        return response;

    } catch (err) {
        return err;
    }
}


export const deleteOptionById: any = async (id: string) => {
    try {
        const response = await api.delete(URLS.options.get(id));

        console.log("==================>",response)
        return response;

    } catch (err) {
        return err;
    }
}


export const addOptionById: any = async (id: string) => {
    try {
        const response = await api.delete(URLS.options.get(id));

        console.log("==================>",response)
        return response;

    } catch (err) {
        return err;
    }
}