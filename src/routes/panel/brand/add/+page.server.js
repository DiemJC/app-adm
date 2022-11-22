import { createBrand } from '$lib/server/brand'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const name = data.get('name');
        const slug = data.get('slug');

        const { success , message } = await createBrand({name,slug});

        return {
            success,
            message
        }
    }
}