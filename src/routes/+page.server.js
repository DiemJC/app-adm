import { invalid } from '@sveltejs/kit';
import { signIn } from '$lib/server/session';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(!email) return invalid(400,{email:true,missing:true});
        
        if(!password) return invalid(400,{password:true,missing:true});

        if(password.length < 6) return invalid(403,{password,short:true});
        
        const response = await signIn({email,password});
        
        const { success , message , token } = response;

        if(!success) return invalid(401,{failedFetch:true,message});


        return {
            success,
            message,
            token
        }
    }
}