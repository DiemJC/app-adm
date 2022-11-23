import { updateCategory } from '$lib/server/category'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const cid = data.get('cid')
        const brand = data.get('brand');
        const name = data.get('name');
        const slug = data.get('slug');

        const id = `${brand}-${name}`;
    
        const { success , message } = await updateCategory({id,name,slug},cid);

        return {
            success,
            message
        }
    }
}