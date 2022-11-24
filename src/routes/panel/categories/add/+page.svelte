<script>
    import { FormBox, Field } from '$lib/components';
    import { goto } from '$app/navigation';
    import { showToastBR } from '$lib/tools/toasts';
    
    export let form;

    $: NameError = '';

    $: if(form?.success){ 
        showToastBR({title:form.message,message:'Su registro fue realizado con éxito',type:'success'});
        goto('/panel/categories')
    }

    $: if(form?.name && form.missing) NameError = 'Debe ingresar un nombre para la Categoría';

</script>

<svelte:head>Registrar Categoría</svelte:head>

<div class="view text-center box">
    <FormBox btn="Registrar" title="Registrar categoría">
        <Field 
            name="name" type="text" ph="Categoría" label="Nombre" 
            warning={form?.name && form.missing || form?.short} fb={NameError} 
        />
        <Field 
            name="slug" type="textarea" ph="Descripción (opcional)" label="Descripción" 
        />
    </FormBox>
</div>

<style>
    .box {
        width:min(30rem,100%);
        margin:auto;
        margin-top:3em;
    }
</style>