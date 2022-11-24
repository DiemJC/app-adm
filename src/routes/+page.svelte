<script>
	import { goto } from '$app/navigation';
    import { Field , FormBox } from '$lib/components';
    import { auth } from '$lib/store';
    
    export let form;

    $: emailError = '';
    $: passwordError = '';

    $: if(form?.success) {
        const { token , id , role } = form;
        auth.login({token,id,role,isAuth:true});
        goto('/panel');
    }
    $: if(form?.email && form.missing) emailError = 'Debe ingresar un correo electrónico';
    $: if(form?.password && form.missing) passwordError = 'Debe ingresar una contraseña';
    $: if(form?.password && form?.short) passwordError = 'La contraseña es demasiado corta';

</script>

<div class="form-box">
    <FormBox btn="Iniciar sesión" title="Inicio de sesión">
        <Field 
            name="email" type="email" ph="ejemplo@mail.com" label="Correo electrónico" 
            warning={form?.email && form.missing} fb={emailError}
        />
        <Field 
            name="password" type="password" ph="Ingrese su contraseña" label="Contraseña"
            warning={form?.password && form.missing || form?.short} fb={passwordError} 
        />
    </FormBox>
</div>

<style>

    .form-box {
        display:grid;
        place-items: center;
        width:100%;
        min-height: 30rem;
        padding:1em;
    }
    
</style>