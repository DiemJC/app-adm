import { updateBrand } from '$lib/server/brand';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const id = data.get('id');
        const name = data.get('name');
        const slug = data.get('slug');

        console.log({data});
        console.log({id,name,slug})
        const response = await updateBrand({name,slug},id);

        console.log(response);
        // return {
        //     success,
        //     message
        // }
    }
}